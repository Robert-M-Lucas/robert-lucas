import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { LanguageContext } from "../../main";
import { getAllUserConnections, getUserProfile, removeUserConnection, UserProfile } from "../../util/user_profile";
import { auth } from "../../util/firebase";
import { DashLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";

function ConnectionsPage() {
    const {translation: t} = useContext(LanguageContext)!;
    const navigate = useNavigate();
    const [connections, setConnections] = useState<UserProfile[] | null | undefined>(undefined);

    // let leaving = false;
    useEffect(() => {
        auth.authStateReady().then(async () => {
            if (auth.currentUser === null) {
                navigate("/sign-in");
                return;
            }
        if (connections === undefined && auth.currentUser) {
            setConnections(null);

            const conns: UserProfile[] = [];
            const c = await getAllUserConnections(auth.currentUser.uid);

            for (let i = 0; i < c.length; i++) {
                const profile = await getUserProfile(c[i]);
                if (profile) {
                    conns.push(profile);
                }
            }

            setConnections(conns);
        }
    }); }, []);

    return (<>
        <Header header_state="Connections"/>
        <div className="w-100" style={{minHeight: "90vh"}}>
            <div className="container text-center mt-5">
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{t.FIRST_NAME_LABEL}</th>
                        <th scope="col">{t.SURNAME_LABEL}</th>
                        <th scope="col">{t.USERNAME_LABEL}</th>
                        <th scope="col">{t.REMOVE_CONNECTION_LABEL}</th>
                    </tr>
                </thead>
                <tbody>
                    { connections && auth.currentUser &&
                        connections.map((c, i) => {
                            return <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{c.data.firstname}</td>
                                <td>{c.data.surname}</td>
                                <td>{c.data.alias}</td>
                                <td>
                                    <button className="btn btn-outline-danger" role="submit" onClick={async () => {
                                        await removeUserConnection(auth.currentUser!.uid, c.docname);
                                        setConnections(undefined);
                                    }}><DashLg/></button>
                                </td>
                            </tr>
                        })!
                    }
                </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </>);
}

export default ConnectionsPage;