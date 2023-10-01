import { createContext, useContext, useEffect, useState } from 'react';

// firebase
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { auth } from '@/firebase/init';

interface User {
    uid: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signUp: (email: string, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: false,
    signUp: async () => {},
    signIn: async () => {},
    logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email || '',
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signUp = async (email: string, password: string) => {
        try {
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const signIn = async (email: string, password: string) => {
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        setUser(null);
        await signOut(auth);
        setLoading(false);
    };

    return (
        <AuthContext.Provider value={{ user, loading, signUp, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};