import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { auth } from './lib/firebase';
import { useAppDispatch } from './redux/hook';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {

    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    })

  }, [dispatch])


  return (
    <div>
      <Toaster />
      <MainLayout />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
