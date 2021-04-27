import core, { Viewport } from 'puppeteer-core';
import { getOptions } from './options';
import { FileSizeType, FileType } from './types';

let _page: core.Page | null;

async function getPage(isDev: boolean) {
    if (_page) {
        return _page;
    }
    const options = await getOptions(isDev);
    const browser = await core.launch(options);
    _page = await browser.newPage();
    return _page;
}

export async function getScreenshot(html: string, type: FileType, fileSizeType: FileSizeType, isDev: boolean) {
    const page = await getPage(isDev);
    const viewport = createViewport(fileSizeType);
    await page.setViewport(viewport);
    await page.setContent(html);
    const file = await page.screenshot({ type });
    return file;
}

function createViewport(fileSizeType: FileSizeType): Viewport {
    switch (fileSizeType) {
        case 'ogp':
            return { width: 1200, height: 630 };
        default:
            return { width: 2048, height: 1170 };
    }
}
