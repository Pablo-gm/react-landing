import './features.scss'

const features = [
    {   title: 'Perfect Collaboration',
        text: 'World class HD audtio and video for everyone. Even on free model.', 
        icon: './assets/CollaborationIcon.svg',
    },
    {   title: 'Security', 
        text: 'Private, encrypted, fast communication. No downloads required.',
        icon: './assets/SecureIcon.svg', 
    },
    {   title: 'Advanced Features', 
        text: 'Chat, whitebord, share screen and multiple integrations available.',
        icon: './assets/ToolsIcon.svg' 
    },
];

const Features = () => {
    return (
        <div className="features container">
            <div className="grid">
                {features.map((f) => {
                    return (
                        <div className="card" key={f.title}>
                            <div className="features__icon-container">
                                <img src={f.icon ? f.icon : 'https://picsum.photos/48/48'} alt={f.title}/>
                            </div>
                            
                            <div>
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Features
