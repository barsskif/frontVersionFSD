

import { getCurrentSelectVerGpt } from "@src/features/Settings/api/getCurrentSelectVerGpt";
import { getGptAllVersionSelect } from "@src/features/Settings/api/getGptAllVersionSelect";
import { postSetVersionGpt } from "@src/features/Settings/api/postSetVersionGpt";
import { 
  getAllVersionGpt,
  setSelectVersionGptError, 
  setSelectVersionGptSuccess 
} from "@src/features/Settings/model/servsionGptState/slices/versionGptSlice";
import { AppDispatch } from "@src/shared/store/store";


export const getSelectCurrentVerGptAction = () => async (dispatch: AppDispatch) => {
  try {
    const data = await getCurrentSelectVerGpt()

    dispatch(setSelectVersionGptSuccess(data.select_version))
  } catch (error) {
    dispatch(setSelectVersionGptError(error))
  }
};

export const postSelectVerGptAction = (selectVersionGpt: string) => async (dispatch: AppDispatch) => {
  try {
     await postSetVersionGpt(selectVersionGpt)

     dispatch(setSelectVersionGptSuccess(selectVersionGpt))
  } catch (error) {
    dispatch(setSelectVersionGptError(error))
  }
};

export const getAllVersionGptAction = () => async (dispatch: AppDispatch) => {
  try {
    const data = await getGptAllVersionSelect()

    dispatch(getAllVersionGpt(data.settings))
    
  } catch (error) {
    dispatch(setSelectVersionGptError(error))
  }
};



