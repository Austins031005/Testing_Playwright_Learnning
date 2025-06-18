import { test, expect } from "@playwright/test";

let xpusername = "//input[@id='user_login']";
let xppass = "//input[@id='user_pass']";
let xplogin = "//input[@id='wp-submit']";
let xpBtnPost = "//div[normalize-space()='Posts']";
let xpBtnTag = "//a[normalize-space()='Tags']";
let xpTagName = "//input[@id='tag-name']";
let xpBtnAddNewTag = "//input[@id='submit']";
let xpMsgErrorAddTag =
  "//p[normalize-space()='A name is required for this term.']";
let xpDuplicateMsgErrorAddTag =
  "//p[contains(text(),'A term with the name provided already exists in this taxonomy')]";
let xpSlug = "//input[@id='tag-slug']";
let xpTagAdd = "//p[normalize-space()='Tag added.']";
let xpMsgAddCategory = "//p[normalize-space()='Category added.']";
let xpBtnCategory = "//a[normalize-space()='Categories']";
let xpParent = "//select[@id='parent']";
let xpBtnAddNewCate = "//input[@id='submit']";
const username = "k13-nhu";
const pass = "jOzeymSdcu(POP)hritcC7eh";

function getXPathTagNameInTable(name: string) {
  return `//tbody//a[contains(text(),'${name}')]`;
}
function getXPathBtnDelete(name: string) {
  return `a[aria-label='Delete “${name}”']`;
}

test.describe("POST - Post Tag Failed", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin", {
      waitUntil: "domcontentloaded",
    })
    await page.locator(xpusername).fill(username);
    await page.locator(xppass).fill(pass);
    await page.locator(xplogin).click();
    await page.locator(xpBtnPost).click();
    await page.locator(xpBtnTag).click();
  })
  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test("@POST_TAG_001 - add tag failed", async ({ page }) => {
    await test.step("Step 1: Click vào button Add new tag", async () => {
      await page.locator(xpBtnAddNewTag).click();
      await expect(page.locator(xpMsgErrorAddTag)).toBeVisible();
    });
    await test.step('Step 2: Điền thông tin tag: name = "lesson tag", click button "Add New Tag"', async () => {
      await page.locator(xpTagName).fill("lesson tag");
      await page.locator(xpBtnAddNewTag).click();
      await expect(page.locator(xpDuplicateMsgErrorAddTag)).toBeVisible();
    })
  })
})
test.describe("Post - add tag success", async () => {
  let arrAddPost = [
    {
      name: "tag name",
      slug: ""
    },
    {
      name: "tag name 02",
      slug: "tag-name 02"
    }
  ]
  test.beforeEach(async ({ page }) => {
    await test.step("Go to Website", async () => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
      await page.locator(xpusername).fill(username);
      await page.locator(xppass).fill(pass);
      await page.locator(xplogin).click();
      await page.locator(xpBtnPost).click();
      await page.locator(xpBtnTag).click();
    })
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    })
  })
  test.afterEach(async ({ page }) => {
    for (let i = 0; i < arrAddPost.length; i++) {
      await test.step("Clear data", async () => {
        await page.locator(getXPathTagNameInTable(arrAddPost[i].name)).hover();
        await page.locator(getXPathBtnDelete(arrAddPost[i].name)).click();
      })
    }
  })
  test("@POST_TAG_002 - add tag success", async ({ page }) => {
    for (let i = 0; i < arrAddPost.length; i++) {
      await test.step('Step 1: Điền thông tin tag: name = "tag {name}", click button "Add New Tag"', async () => {
        await page.fill(xpTagName, arrAddPost[i].name);
        if (arrAddPost[i].slug != "") {
          await page.fill(xpSlug, arrAddPost[i].slug);
        }
        await page.locator(xpBtnAddNewTag).click();
        await expect(page.locator(xpTagAdd)).toBeVisible();
      })
    }
  })
})
test.describe("Post - slug auto remove special character", async () => {
  let arrAddPost = [
    {
      name: "tag name 03",
      slug: "Đây là tag đặc biệt @100 $200"
    }
  ]
  test.beforeEach(async ({ page }) => {
    await test.step("Go to Website", async () => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
      await page.locator(xpusername).fill(username);
      await page.locator(xppass).fill(pass);
      await page.locator(xplogin).click();
      await page.locator(xpBtnPost).click();
      await page.locator(xpBtnTag).click();
    })
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    })
  })
  test.afterEach(async ({ page }) => {
    for (let i = 0; i < arrAddPost.length; i++) {
      await test.step("Clear data", async () => {
        await page.locator(getXPathTagNameInTable(arrAddPost[i].name)).hover();
        await page.locator(getXPathBtnDelete(arrAddPost[i].name)).click();
      })
    }
  })
  test("@POST_TAG_003 - slug auto remove special character", async ({ page }) => {
    for (let i = 0; i < arrAddPost.length; i++) {
      await test.step('Step 1: Điền thông tin tag: name = "tag {name}", click button "Add New Tag"', async () => {
        await page.fill(xpTagName, arrAddPost[i].name);
        if (arrAddPost[i].slug != "") {
          await page.fill(xpSlug, arrAddPost[i].slug);
        }
        await page.locator(xpBtnAddNewTag).click();
        await expect(page.locator(xpTagAdd)).toBeVisible();
      })
    }
  })
})

test.describe("Category - create category success", async () => {
  let arrAddCate = [
    {
      name: "category name 03",
      slug: "Đây là category đặc biệt @100 $200",
      parent: ""
    },
    {
      name: "category name 04",
      slug: "",
      parent: "k11 class"
    }
  ]
  test.beforeEach(async ({ page }) => {
    await test.step("Go to Website", async () => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
      await page.locator(xpusername).fill(username);
      await page.locator(xppass).fill(pass);
      await page.locator(xplogin).click();
      await page.locator(xpBtnPost).click();
      await page.locator(xpBtnCategory).click();
    })
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    })
  })
  test.afterEach(async ({ page }) => {
    for (let i = 0; i < arrAddCate.length; i++) {
      await test.step("Clear data", async () => {
        await page.locator(getXPathTagNameInTable(arrAddCate[i].name)).hover();
        await page.locator(getXPathBtnDelete(arrAddCate[i].name)).click();
      })
    }
    await page.close();
  })
  test("@POST_CATEGORY_001 - slug auto remove special character", async ({ page }) => {
    for (let i = 0; i < arrAddCate.length; i++) {
      await test.step('Step: Điền các trường thông tin, click button "Add New Category"', async () => {
        await page.fill(xpTagName, arrAddCate[i].name);
        if (arrAddCate[i].slug != "") {
          await page.fill(xpSlug, arrAddCate[i].slug);
        }
        if (arrAddCate[i].parent != "") {
          await page.selectOption(xpParent, arrAddCate[i].parent);
        }
        await page.locator(xpBtnAddNewCate).click();
        await expect(page.locator(xpMsgAddCategory)).toBeVisible();
      })
    }
  })
})



