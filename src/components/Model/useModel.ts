import { useCallback, useContext, useEffect } from "react";
import { Models } from "./ContextModels";

export default function useModel(modelName: string  ) {
    const { registerModel, unregisterModel, getModelByName } = useContext(Models)

    useEffect(() => () => (unregisterModel(modelName)), [modelName, unregisterModel])

    const getModel = useCallback(() => getModelByName(modelName), [getModelByName, modelName])

    return {registerModel, getModel}
}