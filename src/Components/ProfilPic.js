import profilPix from "../Assets/Images/PPLinkedIn.jpeg";

const ProfilPic = () => {
    return (
            <img
                src={profilPix}
                className="rounded-full w-40 h-40"
                alt="François Chevalier développeur web front end react" />
    );
};

export default ProfilPic;