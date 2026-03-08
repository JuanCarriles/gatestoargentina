import { promises as fs } from 'fs';
import path from 'path';
import type { Module } from '@/types/modules';

/**
 * Loads modules data server-side from public/data/modules.json.
 * This ensures module data is available in the initial HTML for SEO.
 */
export async function getModulesData(): Promise<Module[]> {
    const filePath = path.join(process.cwd(), 'public', 'data', 'modules.json');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContents);
    return data.modules || data;
}

/**
 * Loads a single module by ID server-side.
 */
export async function getModuleById(moduleId: string): Promise<Module | undefined> {
    const modules = await getModulesData();
    return modules.find((m) => m.id === moduleId);
}
