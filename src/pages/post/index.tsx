import React, { useState, FormEvent, ChangeEvent } from 'react';

import {
    Form, Network, Calendar, DescriptionPost,
    File, ViewPost, ViewPostMobile, CardHeader, ContainerFooter
} from './style';
import Insta from '../../assets/insta.svg';
import Linkedin from '../../assets/linkedin.svg';
import Youtube from '../../assets/youtube.svg';
import Pinterest from '../../assets/pinterest.svg';
import Twiter from '../../assets/twiter.svg';
import Face from '../../assets/face.svg';
import Previewpost from '../../assets/preview_post.svg';

import Dropzone from '../../components/upload';
import Preview from '../../components/preview';

const Post: React.FC = () => {

    const [selectedFile, setSelectedFile] = useState<File>();
    const [fileURL, setFileURL] = useState('');
    const [selectedDescription, setselectedDescription] = useState<string>('');
    const [selectedNetwork, setselectedNetwork] = useState<number[]>([]);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
    });

    function hadleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function hadleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
        const description = event.target.value;
        setselectedDescription(description);
    }

    function handleSelectNetwork(id: number) {
        const alreadySelected = selectedNetwork.findIndex((item) => item === id);

        if (alreadySelected >= 0) {
            const filteredItems = selectedNetwork.filter((item) => item !== id);
            setselectedNetwork(filteredItems);
        } else {
            setselectedNetwork([...selectedNetwork, id]);
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { date, time } = formData;
        const networks = selectedNetwork;
        const description = selectedDescription;
        const data = {
            date,
            time,
            description,
            networks,
            'image': selectedFile
        };

        // const data = new FormData();

        // data.append('date', date);
        // data.append('time', time);
        // data.append('description', selectedDescription);

        console.log(data);

        // data.append('networks', networks.join(','));
        // if (selectedFile) {
        //   data.append('image', selectedFile);
        // }

    }
    return (
        <Form>
            <section className="FormPost">
                <Network>
                    <CardHeader>
                        <div className="title"><span>Redes Sociais</span></div>
                    </CardHeader>
                    <div className="CardContainer">
                        <ul>
                            <li
                                className={selectedNetwork.includes(1) ? 'selected insta' : "insta"}
                                onClick={() => handleSelectNetwork(1)}>
                                <img src={Insta} alt="Instagram" />
                            </li>
                            <li
                                className={selectedNetwork.includes(2) ? 'selected linke' : "linke"}
                                onClick={() => handleSelectNetwork(2)}>
                                <img src={Linkedin} alt="Linkedin" />
                            </li>
                            <li><img src={Youtube} alt="Youtube" /></li>
                            <li><img src={Pinterest} alt="Pinterest" /></li>
                            <li><img src={Twiter} alt="Twiter" /></li>
                            <li><img src={Face} alt="Face" /></li>
                        </ul>
                    </div>
                </Network>
                <Calendar>
                    <CardHeader>
                        <div className="title"><span>Data da Publicação</span></div>
                    </CardHeader>
                    <div className="CardContainer">
                        <input onChange={hadleInputChange} name="date" type="date" value="2017-06-01" />
                        <input onChange={hadleInputChange} name="time" type="time" />
                    </div>
                </Calendar>
                <DescriptionPost>
                    <CardHeader>
                        <div className="title"><span>Texto do post</span></div>
                        <textarea onChange={hadleTextareaChange} name="description" placeholder="Aqui vai o texto descritivo do post"></textarea>
                    </CardHeader>
                </DescriptionPost>
                <File>
                    <CardHeader>
                        <div className="title"><span>Upload de imagem</span></div>
                        <Dropzone onFileUploaded={setSelectedFile} onFileURL={setFileURL} />
                    </CardHeader>
                </File>
                <ViewPostMobile>
                    <button>Visualizar post</button>
                </ViewPostMobile>
            </section>
            <section className="PreviewPost">
                <ViewPost>
                    <CardHeader>
                        <div className="title"><span>Visualização do post</span></div>
                    </CardHeader>
                    {fileURL ? (
                        <Preview
                            img={fileURL}
                            description={selectedDescription}
                            networks={selectedNetwork}
                        />
                    ) : (
                            <>
                                <div className="TextWait">
                                    <span>Aguardando conteúdo, informe os canais e as  mídias desejadas para visualização.</span>
                                </div>
                                <div className="PostPreview">
                                    <img src={Previewpost} alt="PostPreview" />
                                </div>
                            </>
                        )
                    }
                </ViewPost>
            </section>
            <section className="Footer">
                <ContainerFooter>
                    <div className="cancel"><a href="/">Cancelar</a></div>
                    <div className="save">
                        <a href="/">
                            <span className="mobile">Rascunho</span>
                            <span className="desktop">Salvar rascunho</span>
                        </a>
                    </div>
                    <div className="schedule"><a onClick={handleSubmit} href="/">Agendar </a></div>
                </ContainerFooter>
            </section>
        </Form>
    );
};

export default Post;