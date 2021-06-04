import React, {createContext, ReactNode} from 'react';

export interface CarModel {
    modelName: string
    overlayNode: ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>
    registredModels: CarModel[]
    registerModel: (model: CarModel) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName: string) => CarModel | null
}

export const Models = createContext<ModelsContext>({} as ModelsContext)