
import instaIcon from '../../assets/img/insta.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';

interface Props {
    isMobile: boolean;
    isForIpad: boolean;
    isForIpadHor: boolean;
    type?: string;

}

const SocialFooter: React.FC<Props> = ({
    isMobile,
    isForIpad,
    isForIpadHor,
    type = 'home'
}) => {
    return (
        <div style={{ display: type === 'gravidanza' ? 'flex' : '', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'start' : 'center', gap: '20px' }}>
            <div
                style={{
                    display: 'flex',
                    gap: '16px',
                    marginBottom: type === 'gravidanza' ? '0' : '56px',
                }}
            >
                <a
                    href="https://www.instagram.com/benedettamosole_nutrizionista/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram di Benedetta Mosole"
                >
                    <img
                        draggable={false}
                        src={instaIcon}
                        alt="Instagram"
                    />
                </a>

                <a
                    href="https://it.linkedin.com/in/benedettamosole"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn di Benedetta Mosole"
                >
                    <img
                        draggable={false}
                        src={linkedinIcon}
                        alt="LinkedIn"
                    />
                </a>
            </div>

            <p
                className="caption"
                style={{
                    width: type === 'gravidanza' ? '100%' :
                        isMobile || isForIpad || isForIpadHor
                            ? '40%'
                            : '',
                    color: '#0f1f15',
                    display: type === 'gravidanza' ? 'flex' : '', justifyContent: 'flex-end',
                    margin: 0,
                }}
            >
                ©2025 | Dott.ssa Benedetta Mosole | Ordine dei Biologi Tri_A3566 | P.ta IVA 05474130266
            </p>
        </div >
    );
};

export default SocialFooter;
