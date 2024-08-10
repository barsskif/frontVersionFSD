import { getCurrentSelectVerGpt } from "@src/features/Global/api/getCurrentSelectVerGpt";
import { getGptAllVersionSelect } from "@src/features/Global/api/getGptAllVersionSelect";
import { getAllVersionGpt, setSelectVersionGptError, setSelectVersionGptLoading, setSelectVersionGptSuccess } from "@src/features/Global/model/globalVervsionGptState/slices/versionGptSlice";
import { AppDispatch } from "@src/shared/store/store";

export const getAllVersionGptAction = () => async (dispatch: AppDispatch) => {
    try {


      const data = await getGptAllVersionSelect()

      const allVersionGpt = {
        ...data.settings,
        'llama 3.1': 'llama 3.1'
      }
  
      dispatch(getAllVersionGpt(allVersionGpt))
      
    } catch (error) {
      dispatch(setSelectVersionGptError(error))
    }
  };


 export const getSelectCurrentVerGptAction = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(setSelectVersionGptLoading(true))

      const data = await getCurrentSelectVerGpt()
  
      dispatch(setSelectVersionGptSuccess(data.select_version))
    } catch (error) {
      dispatch(setSelectVersionGptError(error))
    }finally {
      dispatch(setSelectVersionGptLoading(false))
    }
  };