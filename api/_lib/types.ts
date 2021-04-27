export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';
export type FileSizeType = 'default' | 'ogp';

export interface ParsedRequest {
    fileType: FileType;
    fileSizeType: FileSizeType;
    text: string;
    theme: Theme;
    md: boolean;
    fontSize: string;
    images: string[];
    widths: string[];
    heights: string[];
}
