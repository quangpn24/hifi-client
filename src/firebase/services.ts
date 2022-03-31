import { deleteObject, getStorage } from 'firebase/storage';
import { auth, googleProvider, storage } from './';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { RcFile } from 'antd/lib/upload';
import { signInWithPopup } from 'firebase/auth';
import userApi from 'api/userApi';

const uploadImage = async (file: RcFile) => {
  try {
    const storageRef = ref(storage, `/images/${file.uid}_${new Date().valueOf()}`);
    const imageUrl = await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      const url = getDownloadURL(snapshot.ref);
      return url;
    });
    return { url: imageUrl };
  } catch (error: any) {
    return { error: error?.message ?? 'Something went wrong!' };
  }
};
const deteteImage = async (url: string | undefined) => {
  try {
    if (!url) return;
    const start = url.indexOf('/images%2F') + '/images%2F'.length;
    const end = url.indexOf('?alt');
    const fileName = url.slice(start, end);
    console.log('fileName', fileName);
    const storageRef = ref(storage, `/images/${fileName}`);
    await deleteObject(storageRef);
    console.log('Delete successfully!');
  } catch (error: any) {
    console.log(error);
    return;
  }
};

const signInWithGoogle = async () => {
  try {
    const user = await signInWithPopup(auth, googleProvider);
    const _id = user.user.uid;

    const response = await userApi.login(_id);

    console.log({ response });
    return response;
  } catch (error) {
    return error;
  }
};

export { uploadImage, deteteImage, signInWithGoogle };
