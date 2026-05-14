import { Route, Routes } from "react-router-dom"
import { Layout } from "../layout"
import { HomeMainPage } from "../home"

export const RouteApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomeMainPage />} />
            </Route>
        </Routes>
    )
}