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
  uploadImage,
  deteteImage,
  signInWithGoogle,
  signInWithEmailPassword,
  signUpWithEmailPassword,
};
