import axiosInstance from '@src/app/setings/axiosConfig';

export const postSetVersionGpt = async (versionGpt: string) => {
  const { data } = await axiosInstance.post(`/api/set-version-gpt`, {
    set_version_gpt: versionGpt,
  });

  return data;
};