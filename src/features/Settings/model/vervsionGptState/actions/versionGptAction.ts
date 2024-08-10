import { setSelectVersionGptError, setSelectVersionGptLoading, setSelectVersionGptSuccess } from "@src/features/Global/model/globalVervsionGptState/slices/versionGptSlice";
import { postSetVersionGpt } from "@src/features/Settings/api/postSetVersionGpt";
import { AppDispatch } from "@src/shared/store/store";


export const postSelectVerGptAction = (selectVersionGpt: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSelectVersionGptLoading(true))
     await postSetVersionGpt(selectVersionGpt)

     dispatch(setSelectVersionGptSuccess(selectVersionGpt))
  } catch (error) {
    dispatch(setSelectVersionGptError(error))
  }finally {
    dispatch(setSelectVersionGptLoading(false))
  }
};

