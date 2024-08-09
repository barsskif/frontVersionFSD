
import { getVersionAssistent } from "@src/features/Chat/api/getVersionAssistent";
import { postSelectVersionGpt } from "@src/features/Settings/api/postSelectVersionGpt";
import { 
  setSelectVersionGptError, 
  setSelectVersionGptSuccess 
} from "@src/features/Settings/model/servsionGptState/slices/versionGptSlice";
import { AppDispatch } from "@src/shared/store/store";


export const getSelectVerGptAction = () => async (dispatch: AppDispatch) => {
  try {
    const data = await getVersionAssistent()

    dispatch(setSelectVersionGptSuccess(data.select_version))
  } catch (error) {
    dispatch(setSelectVersionGptError(error))
  }
};

export const postSelectVerGptAction = (selectVersionGpt: string) => async (dispatch: AppDispatch) => {
  try {
     await postSelectVersionGpt(selectVersionGpt)

     dispatch(setSelectVersionGptSuccess(selectVersionGpt))
  } catch (error) {
    dispatch(setSelectVersionGptError(error))
  }
};



