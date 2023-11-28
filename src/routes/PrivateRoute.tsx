import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react"
import { Navigate, useLoaderData, useLocation } from "react-router-dom";

interface IProps {
    children: ReactNode
}

function PrivateRoute({ children }: IProps) {

    const { user, isLoading } = useAppSelector(state => state.user);

    const { pathname } = useLocation();

    if (isLoading) {
        return <p>Loading</p>
    }

    if (!user.email && !isLoading) {
        return <Navigate to="/login" state={{ path: pathname }} />
    }

    return children;
}

export default PrivateRoute