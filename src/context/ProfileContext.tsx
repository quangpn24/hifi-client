// context/ProfileOverviewContext.tsx
import React, { useCallback, useEffect } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';

export const ProfileOverviewContext = React.createContext<ProfileOverviewContextType | null>(null);

const ProfileOverviewProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [profileOverview, setProfileOverview] = React.useState<ProfileOverviewType>({
    basicInfo: null,
    education: null,
    experience: null,
    skills: null,
    interests: null,
    about: null,
    volunteerings: null,
    awards: null,
    resume: null,
  });
  const user = useAppSelector(selectUser);

  useEffect(() => {
    setProfileOverview((prev) => ({
      ...prev,
      resume: !!user?.resume?.url,
      basicInfo: !!(user?.birthDate && user.phoneNumber && user.photoUrl && user.address),
      about: !!user?.about,
    }));
  }, [user]);

  const changeOverview = useCallback((data: Partial<ProfileOverviewType>) => {
    setProfileOverview((prev) => ({ ...prev, ...data }));
  }, []);

  return (
    <ProfileOverviewContext.Provider
      value={{
        profileOverview,
        changeOverview,
        loading: (Object.keys(profileOverview) as Array<keyof typeof profileOverview>).some(
          (key) => profileOverview[key] === null
        ),
      }}
    >
      {children}
    </ProfileOverviewContext.Provider>
  );
};
export const useProfileOverviewContext = () => React.useContext(ProfileOverviewContext);

export default ProfileOverviewProvider;
