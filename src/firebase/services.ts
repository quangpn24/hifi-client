import { RcFile } from 'antd/lib/upload';
import userApi from 'api/userApi';
import { FirebaseError } from 'firebase/app';
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { auth, googleProvider, storage } from './';

function instanceOfRcFile(object: any): object is RcFile {
  return 'uid' in object;
}
const uploadFile = async (file: RcFile | File, folderName: string = 'images') => {
  try {
    const filename = `/${folderName}/${
      instanceOfRcFile(file) ? file.uid : new Date().getTime()
    }_${new Date().valueOf()}`;
    const storageRef = ref(storage, filename);
    const imageUrl = await uploadBytes(storageRef, file).then((snapshot) => {
      const url = getDownloadURL(snapshot.ref);
      return url;
    });
    return { url: imageUrl };
  } catch (error: any) {
    return { error: error?.message ?? 'Something went wrong!' };
  }
};
const deteteFile = async (url: string | undefined, folderName: string = 'images/') => {
  try {
    if (!url) return;
    const filename = folderName.replaceAll('/', '%2F');
    const start = url.indexOf(filename) + filename.length;
    const end = url.indexOf('?alt');
    const fileName = url.slice(start, end);
    const storageRef = ref(storage, `/${folderName}/${fileName}`);
    await deleteObject(storageRef);
  } catch (error: any) {
    console.log(error.message);
    return;
  }
};

const signInWithGoogle = async () => {
  try {
    const credential = await signInWithPopup(auth, googleProvider);

    return { user: credential.user };
  } catch (error: any) {
    let errorMessage: string | undefined = error?.message ?? 'Something went wrong!';
    const firebaseError = error as FirebaseError;
    if (firebaseError.code === AuthErrorCodes.POPUP_CLOSED_BY_USER) {
      errorMessage = undefined;
    }
    return { error: errorMessage };
  }
};

const signInWithEmailPassword = async (email: string, password: string) => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);

    return { user: credential.user };
  } catch (error: any) {
    let errorMessage: string = error?.message ?? 'Something went wrong!';
    const firebaseError = error as FirebaseError;
    if (firebaseError.code === AuthErrorCodes.USER_DELETED) {
      errorMessage = 'Email is not registered';
    } else if (firebaseError.code === AuthErrorCodes.INVALID_PASSWORD) {
      errorMessage = 'Wrong email or password';
    }

    return { error: errorMessage };
  }
};
const signUpWithEmailPassword = async (email: string, password: string) => {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password);

    return { user: credential.user };
  } catch (error: any) {
    let errorMessage: string = error?.message ?? 'Something went wrong!';
    if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
      errorMessage = 'Email is already used!';
    } else if (error.code === AuthErrorCodes.USER_DELETED) {
      errorMessage = 'Email is not registered!';
    }
    return { error: errorMessage };
  }
};

export {
  uploadFile,
  deteteFile,
  signInWithGoogle,
  signInWithEmailPassword,
  signUpWithEmailPassword,
};
