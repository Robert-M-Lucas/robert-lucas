import { useParams } from "react-router-dom";
import { BusinessCard } from "../../components/business_card/BusinessCard";
import { FullscreenCenter } from "../../components/FullscreenCenter";
import { UserProfile, getUserProfile, getUserProfileByAlias } from "../../util/user_profile";
import _404Page from "../404/404";
import { useState } from "react";
import { Loading } from "../../components/Loading";

interface Props {
    username_mode?: boolean
}

export function BusinessCardPage({ username_mode }: Props) {
    const { id } = useParams();

    const [userProfile, setUserProfile] = useState<UserProfile | undefined>(undefined);
    const [state, setState] = useState<"unstarted" | "started" | "done">("unstarted");

    if (id === undefined) {
        return <_404Page/>;
    }

    if (state === "unstarted") {
        setState("started");
        if (username_mode) {
            getUserProfileByAlias(id).then((profile) => {
                setUserProfile(profile);
                setState("done");
            });
        }
        else {
            getUserProfile(id).then((profile) => {
                setUserProfile(profile);
                if (profile !== undefined) {
                    window.history.replaceState(null, "", "/user/" + profile.data.alias + "/card")
                }
                setState("done");
            });
        }
    }

    if (state !== "done") {
        return <Loading/>;
    }
    else if (userProfile === undefined) {
        return <>
            <h1>User does not exist</h1>
        </>;
    }
    else {
        return <>
            <FullscreenCenter>
                <BusinessCard user_profile={userProfile} enable_click={false} can_connect={true}/>
            </FullscreenCenter>
        </>
    }
}