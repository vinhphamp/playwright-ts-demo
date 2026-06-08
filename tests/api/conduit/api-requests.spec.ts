import { test, expect, request } from '@playwright/test';

test.beforeEach( async({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/')

    // Use setup (storageState) 
    // -> Need to declare the configuration (.auth/user.json + .gitignore + auth.setup.ts + playwright.config.ts to use setup )
    
    // Not use setup (storageState)
    await page.getByText('Sign in').click()
    await page.getByPlaceholder('Email').fill('vinhphamp@gmail.com')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', { name: 'Sign in' }).click()

})

test('delete article with UI mode', async({ page, request }) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data: {
            "user": {
                "email":"vinhphamp@gmail.com",
                "password":"admin123"
            }
        }
    })
    const responseBody = await response.json()
    console.log(responseBody.user.token)
    const accessToken = responseBody.user.token

    const articleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data: {
            "article": {
                "title":"This is test title with UI mode",
                "description":"This is test description with UI mode",
                "body":"This is test body with UI mode",
                "tagList":["testArticle"]
            }
        },
        headers: {
            Authorization: `Token ${accessToken}`
        }
    })
    expect(articleResponse.status()).toEqual(201)

    await page.getByText('Global Feed').click()
    await page.getByText('This is test title with UI mode').click()
    await page.getByRole('button', { name: "Delete Article" }).first().click()
    await page.getByText('Global Feed').click()

    await expect(page.locator('app-article-list h1').first()).not.toContainText('This is test title with UI mode')

});

test('delete article with BackEnd mode', async({ page, request }) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data: {
            "user": {
                "email":"vinhphamp@gmail.com",
                "password":"admin123"
            }
        }
    })
    const responseBody = await response.json()
    console.log(responseBody.user.token)
    const accessToken = responseBody.user.token    

    const articleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data: {
            "article": {
                "title":"This is test title with BackEnd mode",
                "description":"This is test description with BackEnd mode",
                "body":"This is test body with BackEnd mode",
                "tagList":["testArticle"]
            }
        },
        headers: {
            Authorization: `Token ${accessToken}`
        }
    })
    expect(articleResponse.status()).toEqual(201)
    const articleresponseBody = await articleResponse.json()
    const articleID = articleresponseBody.article.slug

    await page.getByText('Global Feed').click()
    await expect(page.locator('app-article-list h1').first()).toContainText('This is test title with BackEnd mode')

    const articleDelete = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${articleID}`, {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    })
    expect(articleDelete.status()).toEqual(204)

    await page.getByText('Global Feed').click()
    await expect(page.locator('app-article-list h1').first()).not.toContainText('This is test title with BackEnd mode')



});


// Sample data
// email:      "vinhphamp@gmail.com"
// password:   "admin123"
// https://conduit-api.bondaracademy.com/api/articles/zczxczXC-55172 -> "slug": "zczxczXC-55172" (id)

// {
//     "article": {
//         "slug": "article-with-BackEnd-55172",
//         "title": "article with BackEnd",
//         "description": "article with BackEnd",
//         "body": "article with BackEnd",
//         "tagList": [
//             "backEnd_API"
//         ],
//         "createdAt": "2026-06-08T15:02:17.421Z",
//         "updatedAt": "2026-06-08T15:02:17.421Z",
//         "favorited": false,
//         "favoritesCount": 0,
//         "author": {
//             "username": "pw_vinhpham",
//             "bio": null,
//             "image": "https://conduit-api.bondaracademy.com/images/smiley-cyrus.jpeg",
//             "following": false
//         }
//     }
// }

test('create article', async({ page, request}) => {
    await page.getByText('New Article').click()
    await page.getByRole('textbox', {name: 'Article Title'}).fill('Playwright is awesome')
    await page.getByPlaceholder('What\'s this article about?').fill('About the Playwright')
    await page.getByRole('textbox', { name: 'Write your article (in markdown)'}).fill('We like to use Playwright for automation')
    await page.getByRole('button', { name: 'Publish Article'}).click()
    
    const articleResponse = await page.waitForResponse('https://conduit-api.bondaracademy.com/api/articles/')
    const articleresponseBody = await articleResponse.json()
    const slugId = articleresponseBody.article.slug    
    
    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data: {
            "user": {
                "email":"vinhphamp@gmail.com",
                "password":"admin123"
            }
        }
    })

    const responseBody = await response.json()
    console.log(responseBody.user.token)
    const accessToken = responseBody.user.token  

    await expect(page.locator('.article-page h1')).toContainText('Playwright is awesome')
    await page.getByText('Home').click()
    await expect(page.locator('app-article-list h1').first()).toContainText('Playwright is awesome')

    const deleteArticleResponse = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugId}`, {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    })
     expect(deleteArticleResponse.status()).toEqual(204)
     await page.getByText('Global Feed').click()
});