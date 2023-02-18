const mesServices = [
    {
        id: 1,
        title: "Gestion de projets web",
        color: "jaune",
        body: "Site vitrine, corporate, événementiel, e-commerce, intranet.",
        icon: <svg className="w-5 h-5 text-bleu-vert lg:w-7 lg:h-7" id="Layer_1"
                   fill="white"
                   viewBox="0 0 64 64"
                   xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
            <path
                d="m60 6h-56a3 3 0 0 0 -3 3v46a3 3 0 0 0 3 3h56a3 3 0 0 0 3-3v-46a3 3 0 0 0 -3-3zm1 49a1 1 0 0 1 -1 1h-56a1 1 0 0 1 -1-1v-39h58zm0-41h-58v-5a1 1 0 0 1 1-1h56a1 1 0 0 1 1 1z"/>
            <path d="m5 10h16v2h-16z"/>
            <path d="m57 10h2v2h-2z"/>
            <path d="m53 10h2v2h-2z"/>
            <path d="m49 10h2v2h-2z"/>
            <path
                d="m22.41 31.24 4.22.85a18.29 18.29 0 0 0 -1.23 3.08 1 1 0 0 0 .26 1l6.62 6.63a1 1 0 0 0 .71.29.84.84 0 0 0 .27 0 17 17 0 0 0 3.08-1.23l.84 4.14a1 1 0 0 0 .69.76 1 1 0 0 0 .29 0 1 1 0 0 0 .71-.3l4.24-4.24a1 1 0 0 0 .29-.8l-.4-4.84c4.37-5.74 4-13.78 4-14.15a1 1 0 0 0 -.94-.95c-.36 0-8.41-.39-14.15 4l-4.97-.48a1 1 0 0 0 -.8.29l-4.24 4.26a1 1 0 0 0 .51 1.69zm16.37 12.55-.61-3a21.42 21.42 0 0 0 3-2.19l.24 2.63zm6.22-20.32c0 2.44-.56 9.05-4.66 13.15a19.83 19.83 0 0 1 -7 4.31l-5.84-5.78a19.86 19.86 0 0 1 4.3-7c4.1-4.15 10.72-4.63 13.2-4.68zm-17.77 3.59 2.63.24a20.58 20.58 0 0 0 -2.2 2.95l-3-.6z"/>
            <path
                d="m36 36.38a4 4 0 1 0 -2.83-6.83 4 4 0 0 0 2.83 6.83zm-1.37-5.38a2 2 0 0 1 1.37-.62 2 2 0 1 1 -1.41.59z"/>
            <path
                d="m18.15 44a10 10 0 0 1 1.46 0c-1.31 1.23-2.79 3.27-1.91 5.77a1 1 0 0 0 1.65.37 7.83 7.83 0 0 1 2.7-1.74c.16 1.42.44 1.7.6 1.86a1 1 0 0 0 .71.29.79.79 0 0 0 .3-.05c6.13-1.93 6.35-5.43 5.94-7.35l-2 .42c.44 2-.77 3.57-3.58 4.68 0-.3-.07-.64-.09-1a1 1 0 0 0 -.84-.93 5.24 5.24 0 0 0 -3.52 1 7 7 0 0 1 2.65-2.91 1 1 0 0 0 .49-.78 1 1 0 0 0 -.35-.84 4.3 4.3 0 0 0 -2.28-.79 6.31 6.31 0 0 1 4.75-1.24l.51-1.93c-2-.54-6.51.25-8.2 3.73a1 1 0 0 0 1 1.43z"/>
        </svg>
    },
    {
        id: 2,
        title: "Intégration web",
        color: "rose-rouge",
        body: "Des intégrations HTML/CSS/JS respectueuses des standards du web.",
        icon: <svg id="Layer_1" enableBackground="new 0 0 450 450"
                   className="w-5 h-5 text-bleu-vert lg:w-7 lg:h-7"
                   fill="white"
                   viewBox="0 0 450 450"
                   xmlns="http://www.w3.org/2000/svg">
            <g id="_x32_074_-_Cloud_Computing">
                <g>
                    <g>
                        <g>
                            <g>
                                <path
                                    d="m385.3 120.4c0 26.6-22.1 48.3-49.2 48.3h-224c-27.1 0-49.2-21.6-49.2-48.3s22.1-48.3 49.2-48.3c2.4 0 4.4-2 4.4-4.4 0-21.3 17.7-38.7 39.5-38.7 5.9 0 11.6 1.3 16.9 3.7 1.8.8 4 .3 5.2-1.2 11.3-13.8 28-21.7 46-21.7 17.1 0 33.3 7.3 44.5 19.9.8.9 1.9 1.4 3.1 1.5s2.3-.4 3.2-1.2c7.4-6.9 17-10.7 27.2-10.7 21.8 0 39.5 17.3 39.5 38.7 0 3.1-.4 6.2-1.1 9.2-.3 1.2-.1 2.4.6 3.5.7 1 1.8 1.7 3 1.9 23.8 3.9 41.2 24 41.2 47.8z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path
                                    d="m20.8 362v30.6h181.1v-30.6zm98.4 21.5h-9.8c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4h9.8c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4z"/>
                                <path d="m20.8 230.9h181.1v122.3h-181.1z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path d="m143.9 440h-59.2l16.9-19.7h25.4z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path d="m104 401.4h20.6v10.2h-20.6z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path d="m248.1 230.9h181.1v122.3h-181.1z"/>
                                <path
                                    d="m248.1 362v30.6h181.1v-30.6zm97.5 21.5h-9.8c-2.4 0-4.4-2-4.4-4.4s1.9-4.4 4.4-4.4h9.8c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path d="m370.3 440h-59.2l17-19.7h25.3z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path d="m330.4 401.4h20.6v10.2h-20.6z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path
                                    d="m341.2 198.8v23.4h-8.7v-19h-218.5v19h-8.7v-23.4c0-2.4 2-4.4 4.4-4.4h109.2v-17h8.7v17h109.2c2.5 0 4.4 2 4.4 4.4z"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    },
    {
        id: 3,
        title: "Développements spécifiques",
        color: "bleu-vert",
        body: "Développements spécifiques front-end pour des outils adaptés à votre coeur de métier, applications & solutions personnalisées.",
        icon: <svg version="1.1" id="Capa_1"
                   className="w-5 h-5 text-bleu-vert lg:w-7 lg:h-7"
                   fill="white"
                   xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   viewBox="0 0 512 512" xmlSpace="preserve">
    <g>
    <g>
    <path d="M266.8,245.685c-0.084-0.088-0.108-0.205-0.194-0.291l-85.604-85.605v-53.789c0-3.985-1.582-7.793-4.394-10.606
l-90-90.999C82.331,0.119,75.871-1.185,70.26,1.144c-5.61,2.314-9.258,7.793-9.258,13.857v45h-46
C8.939,60,3.46,63.647,1.146,69.258c-2.329,5.61-1.04,12.056,3.252,16.348l91,90.999c2.813,2.813,6.621,4.395,10.605,4.395h53.789
l85.604,85.604c0.086,0.086,0.203,0.11,0.291,0.194c5.84,5.574,14.711,5.648,20.629,0
C272.548,260.85,272.408,251.56,266.8,245.685z"/>
</g>
</g>
            <g>
    <g>
        <path d="M256.001,0.002c-38.381,0-74.67,9.765-107.348,25.018l46.014,46.014c19.312-6.422,39.895-10.032,61.335-10.032
			C363.521,61.001,451,148.481,451,256s-87.479,194.999-194.999,194.999S61.002,363.52,61.002,256
			c0-21.44,3.611-42.023,10.032-61.335l-46.014-46.014C9.769,181.33,0.003,217.619,0.003,256
			c0,140.609,115.389,255.999,255.998,255.999S512,396.609,512,256S396.612,0.002,256.001,0.002z"/>
    </g>
</g>
            <g>
    <g>
        <path d="M256.001,121.001c-15.855,0-30.855,3.25-45,8.293v18.074l34.677,34.677c3.406-0.476,6.788-1.044,10.323-1.044
			c41.353,0,75,33.647,75,75c0,41.353-33.647,75-75,75c-41.353,0-75-33.647-75-75c0-3.536,0.568-6.918,1.044-10.323L147.369,211
			h-18.074c-5.043,14.145-8.293,29.145-8.293,45c0,74.443,60.557,134.999,134.999,134.999S391.001,330.443,391.001,256
			S330.444,121.001,256.001,121.001z"/>
    </g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
</svg>
    },
    {
        id: 4,
        title: "Référencement naturel",
        color: "silver-lake",
        body: "Affichage sémantique des informations, optimisation des contenus, des pages propres pour un référencement optimal.",
        icon: <svg id="Layer_1" enableBackground="new 0 0 512 512"
                   className="w-5 h-5 text-bleu-vert lg:w-7 lg:h-7"
                   fill="white"
                   viewBox="0 0 512 512"
                   xmlns="http://www.w3.org/2000/svg">
            <path
                d="m502.507 423.89-92.425-89.704c-5.987-5.813-13.88-8.933-22.27-8.819-2.809.042-5.552.458-8.181 1.206l-41.662-40.434c4.201-6.347 8.028-12.967 11.446-19.864.5-1.009.881-2.046 1.154-3.095h13.729c8.836 0 15.998-7.165 15.998-16.003s-7.164-16.002-16-16.002l-52.978.002v-31.078h35.737c8.837 0 15.999-7.165 15.999-16.002 0-8.838-7.163-16.002-15.999-16.002h-35.737v-29.237h52.979c8.837 0 15.999-7.165 15.999-16.002s-7.163-16.002-15.999-16.002h-12.708c-6.412-13.828-14.573-26.887-24.265-38.814-64.09-78.877-180.39-90.893-259.249-26.79-38.201 31.053-62.026 75.126-67.085 124.102-5.058 48.975 9.255 96.989 40.302 135.198 31.047 38.208 75.112 62.037 124.078 67.096 6.452.667 12.884.997 19.283.997 35.83 0 70.502-10.366 100.465-30.026l41.109 39.898c-1.762 4.042-2.662 8.452-2.595 13.003.126 8.375 3.494 16.187 9.481 21.997l92.427 89.705c6.072 5.892 13.936 8.823 21.794 8.823 8.173 0 16.339-3.174 22.466-9.489l33.37-34.396c12.019-12.387 11.721-32.244-.663-44.268zm-148.138-77.239-7.285 7.509-36.597-35.519c2.554-2.391 5.034-4.845 7.436-7.363zm-185.711-10.84c-40.464-4.181-76.879-23.872-102.534-55.447-25.657-31.575-37.485-71.252-33.304-111.724s23.868-76.892 55.436-102.553c65.168-52.973 161.275-43.042 214.236 22.137 4.793 5.898 9.12 12.133 12.967 18.628h-20.14c-8.837 0-15.999 7.165-15.999 16.002v124.325c0 4.244 1.685 8.315 4.686 11.316s7.07 4.687 11.314 4.687l19.321-.001c-9.019 14.934-20.509 28.125-34.281 39.32-31.569 25.66-71.233 37.489-111.702 33.31zm278.666 143.953-91.424-88.732 32.396-33.393 91.424 88.732zm-270.729-337.155v21.81c0 2.034 1.718 3.752 3.752 3.752h45.047c19.712 0 35.75 16.042 35.75 35.759v21.808c0 19.717-16.038 35.759-35.75 35.759h-64.8c-8.837 0-15.999-7.165-15.999-16.002 0-8.838 7.163-16.002 15.999-16.002h64.8c2.033 0 3.751-1.719 3.751-3.754v-21.808c0-2.035-1.718-3.754-3.751-3.754h-45.047c-19.713 0-35.751-16.041-35.751-35.757v-21.81c0-19.716 16.037-35.756 35.751-35.756h64.8c8.837 0 15.999 7.165 15.999 16.002s-7.163 16.002-15.999 16.002h-64.8c-2.035-.001-3.752 1.717-3.752 3.751zm265.484 119.751c31.309 0 56.782-25.478 56.782-56.793v-42.937c0-31.316-25.473-56.793-56.782-56.793s-56.782 25.478-56.782 56.793v42.937c0 31.316 25.473 56.793 56.782 56.793zm-24.783-99.73c0-13.669 11.118-24.788 24.783-24.788 13.666 0 24.783 11.12 24.783 24.788v42.937c0 13.669-11.118 24.788-24.783 24.788s-24.783-11.12-24.783-24.788z"/>
        </svg>
    },
    {
        id: 5,
        title: "Dynamisme des pages",
        color: "chocolat",
        body: "Des animations de contenu non intrusives, des transitions fluides et des interactions intuitives pour embellir votre projet.",
        icon: <svg id="Capa_1" enableBackground="new 0 0 512 512"
                   className="w-5 h-5 text-bleu-vert lg:w-7 lg:h-7"
                   fill="white"
                   viewBox="0 0 512 512"
                   xmlns="http://www.w3.org/2000/svg">
            <g>
                <g id="Page-1_79_">
                    <g id="_x30_80---Stop-Frame-Animation">
                        <g clipRule="evenodd" fillRule="evenodd">
                            <path id="Path_454_"
                                  d="m231.698 164.05c1.536.836 3.424.663 4.782-.439l53.696-39.726c1.516-1.229 2.397-3.077 2.397-5.029s-.881-3.799-2.397-5.029l-53.705-39.735c-.783-.615-1.748-.952-2.743-.96-.718.002-1.424.181-2.057.521-2.022 1.063-3.243 3.204-3.127 5.486v79.451c-.1 2.28 1.13 4.409 3.154 5.46z"/>
                            <path id="Path_453_"
                                  d="m393.143 493.714h-274.286c-5.049 0-9.143 4.093-9.143 9.143 0 5.049 4.093 9.143 9.143 9.143h274.286c5.049 0 9.143-4.093 9.143-9.143 0-5.049-4.094-9.143-9.143-9.143z"/>
                            <path id="Path_452_" d="m188.507 438.857-18.285 36.572h171.556l-18.285-36.572z"/>
                            <path id="Path_451_"
                                  d="m0 411.429c0 5.049 4.093 9.143 9.143 9.143h493.714c5.049 0 9.143-4.093 9.143-9.143v-27.429h-512z"/>
                        </g>
                        <path id="Shape_211_"
                              d="m502.857 0h-493.714c-5.05 0-9.143 4.093-9.143 9.143v356.571h512v-356.571c0-5.05-4.093-9.143-9.143-9.143zm-292.571 79.131c-.1-9.177 5.003-17.62 13.175-21.797 7.713-3.911 16.976-3.106 23.899 2.075l53.696 39.726c6.178 4.677 9.808 11.977 9.808 19.726s-3.63 15.049-9.808 19.726l-53.696 39.698c-6.922 5.184-16.187 5.989-23.899 2.075-8.166-4.174-13.268-12.608-13.175-21.778zm237.714 186.012c-16.413-.049-30.774-11.047-35.099-26.88-55.04 7.223-65.435 91.045-65.536 91.931-.534 4.611-4.437 8.09-9.079 8.091h-.192c-4.732-.088-8.616-3.772-8.951-8.494-.046-.914-7.314-92.078-68.571-92.078-61.422 0-68.571 91.154-68.571 92.069-.337 4.798-4.333 8.515-9.143 8.503-4.806.012-8.802-3.699-9.143-8.494 0-.914-7.314-92.078-68.571-92.078-61.422 0-68.526 91.154-68.571 92.069-.337 4.798-4.333 8.515-9.143 8.503h-.64c-2.427-.164-4.689-1.288-6.285-3.124s-2.394-4.232-2.218-6.659c2.67-37.76 24.229-109.074 86.857-109.074 42.533 0 66.121 32.914 77.714 65.829 11.593-32.914 35.182-65.829 77.714-65.829 43.648 0 67.346 34.661 78.629 68.434 10.661-29.147 32-64 73.426-68.032 4.579-18.478 22.583-30.34 41.369-27.257s32.053 20.078 30.486 39.051c-1.568 18.973-17.445 33.56-36.482 33.519z"/>
                        <circle id="Oval_55_" clipRule="evenodd" cx="448" cy="228.571" fillRule="evenodd" r="18.286"/>
                    </g>
                </g>
            </g>
        </svg>
    },
    {
        id: 6,
        title: "Interface d'administration",
        color: 'cadet',
        body: "Un CMS ergonomique et 'sur mesure' pour gérer votre site web",
        icon: <svg id="Layer_1" enableBackground="new 0 0 512 512"
                   className="w-5 h-5 text-bleu-vert lg:w-7 lg:h-7"
                   fill="white"
                   viewBox="0 0 512 512"
                   xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd"
                  d="m404.693 85.622c5.076 1.298 9.866 3.307 14.261 5.913l17.85-12.924 14.283 14.283-12.924 17.85c2.606 4.394 4.614 9.185 5.913 14.26l21.754 3.482v20.199l-21.753 3.482c-1.298 5.075-3.307 9.866-5.914 14.26l12.924 17.85-14.283 14.283-17.85-12.924c-4.395 2.606-9.185 4.614-14.26 5.913l-3.482 21.754h-20.2l-3.482-21.753c-5.076-1.298-9.866-3.307-14.261-5.914l-17.85 12.924-14.283-14.283 12.924-17.85c-2.606-4.394-4.614-9.185-5.912-14.26l-21.755-3.482v-20.199l21.755-3.483c1.298-5.075 3.306-9.865 5.912-14.26l-12.924-17.85 14.283-14.283 17.849 12.923c4.395-2.606 9.185-4.615 14.261-5.913l3.482-21.753h20.2zm-220.02-30.988h102.405c4.418 0 8 3.582 8 8s-3.582 8-8 8h-102.405c-4.418 0-8-3.582-8-8s3.581-8 8-8zm159.079 164.889-33.576-33.576 14.307-19.761-24.09-3.856v-47.484l24.09-3.857-14.308-19.761 33.576-33.576 19.761 14.307 2.706-16.908h-28.756c-4.418 0-8-3.582-8-8v-39.051h-193.975v312.393h241.027v-91.087h-9.145l-3.856-24.09zm-59.903-38.766c4.418 0 8 3.582 8 8s-3.582 8-8 8h-99.176c-4.418 0-8-3.582-8-8s3.582-8 8-8zm0-42.042c4.418 0 8 3.582 8 8s-3.582 8-8 8h-99.176c-4.418 0-8-3.582-8-8s3.582-8 8-8zm-99.176-42.04h102.405c4.418 0 8 3.582 8 8s-3.582 8-8 8c-29.884 0-72.521 0-102.405 0-4.418 0-8-3.582-8-8s3.581-8 8-8zm0 126.122h142.655c4.418 0 8 3.582 8 8s-3.582 8-8 8h-142.655c-4.418 0-8-3.582-8-8s3.581-8 8-8zm-8 50.041c0-4.418 3.582-8 8-8h142.655c4.418 0 8 3.582 8 8s-3.582 8-8 8h-142.655c-4.419 0-8-3.582-8-8zm13.381 187.198h-49.107c-15.132 0-27.512 9.891-27.512 21.982v21.982h285.132v-21.982c0-12.09-12.38-21.982-27.512-21.982h-49.107v-51.257h111.622c17.744 0 32.262-14.518 32.262-32.262v-184.353l-26.978 26.978v135.292h-365.706v-200.672c0-2.461 2.013-4.474 4.474-4.474h41.864v-26.978h-41.054c-17.744 0-32.262 14.518-32.262 32.262v221.945c0 17.744 14.518 32.262 32.262 32.262h111.622zm155.408-444.036 23.051 23.051h-23.051zm45.649 92.741c-16.483 0-29.846 13.363-29.846 29.846 0 16.484 13.362 29.846 29.846 29.846 16.483 0 29.846-13.363 29.846-29.846s-13.363-29.846-29.846-29.846z"
                  fillRule="evenodd"/>
        </svg>
    },
    {
        id: 7,
        title: "Responsive design",
        color: "black",
        body: "Compatible tous supports (ordinateur, tablette, smartphone)",
        icon: <svg id="svg31911"
                   viewBox="0 0 16.933333 16.933334"
                   className="w-6 h-6 text-bleu-vert lg:w-8 lg:h-8"
                   fill="white"
                   xmlns="http://www.w3.org/2000/svg">
            <g id="layer1" transform="translate(0 -280.067)">
                <path id="path21611"
                      d="m1.3234315 283.24268c-.4351603 0-.7953005.35756-.7953005.79272v7.40833c0 .43516.3601402.79272.7953005.79272h6.0838659v-2.6448h-6.3494811v-5.55625c0-.15116.1144561-.26355.2656152-.26355h10.0546845c.151149 0 .263549.11239.263549.26355v.26355h.529167v-.26355c0-.43516-.357555-.79272-.792716-.79272zm7.4078169 1.58544c-.43516 0-.794784.36015-.794784.7953v7.40833c0 .43515.359624.79272.794784.79272h3.7129506c-.168899-.22201-.273367-.49486-.273367-.79272v-1.32343h-3.7052006v-5.82084h5.2932166v1.5875h.529166v-1.85156c0-.43516-.359621-.7953-.794781-.7953zm-6.882783.52555a.26460982.26460982 0 0 0 -.2614824.26975v.52916a.26465001.26465001 0 1 0 .5291666 0v-.52916a.26460982.26460982 0 0 0 -.2676842-.26975zm0 1.58801a.26460982.26460982 0 0 0 -.2614824.26975v1.58544a.26465001.26465001 0 1 0 .5291666 0v-1.58544a.26460982.26460982 0 0 0 -.2676842-.26975zm7.408333 0a.26460982.26460982 0 0 0 -.261482.26975v.52917a.26464501.26464501 0 1 0 .529166 0v-.52917a.26460982.26460982 0 0 0 -.267684-.26975zm4.2364346 1.06247c-.435161 0-.793235.35756-.793235.79272v4.23488c0 .43516.358074.79272.793235.79272h2.117182c.43516 0 .792716-.35756.792716-.79272v-4.23488c0-.43516-.357556-.79272-.792716-.79272zm-4.2364346.52555a.26460982.26460982 0 0 0 -.261482.26717v1.58801a.26464501.26464501 0 1 0 .529166 0v-1.58801a.26460982.26460982 0 0 0 -.267684-.26717zm3.9728826.5333h2.644283v3.70262h-2.644283zm-7.1571856 1.5875h.542087c.352859 0 .352859.52968 0 .52968h-.529683c-.3528614.0169-.3779624-.51275-.01241-.52968zm4.7764546 1.58595h.529166a.2646485.2646485 0 0 1 0 .52917h-.529166a.2646485.2646485 0 0 1 0-.52917zm-6.0017025.52917c-.093086.16534-.2325952.34499-.4475163.52968h-.4320169a.264648.264648 0 1 0 0 .52917h3.7134691c-.169026-.22187-.273886-.49452-.273886-.79272v-.26613z"
                      vectorEffect="none"/>
            </g>
        </svg>
    }
]

export default mesServices