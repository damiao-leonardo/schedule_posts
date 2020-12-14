import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import {
    Form, Network, Calendar, DescriptionPost,
    File, ViewPost, ViewPostMobile, CardHeader, ContainerFooter
} from './style';
import { Link, useHistory } from 'react-router-dom';
import Previewpost from '../../assets/preview_post.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition, IconLookup } from '@fortawesome/fontawesome-svg-core';
import Dropzone from '../../components/upload';
import Preview from '../../components/preview';
import ModalComponent from '../../components/modal/sucess';

import api from '../../services/api';

interface NetWork {
    id: number;
    name: string;
    icon: string;
    status: string;
}

const Post: React.FC = () => {

    const history = useHistory();
    const [networks, setNetwoorks] = useState<NetWork[]>([]);
    const [selectedFile, setSelectedFile] = useState<File>();
    const [fileURL, setFileURL] = useState('');
    const [selectedDescription, setselectedDescription] = useState<string>('');
    const [selectedNetwork, setselectedNetwork] = useState<number[]>([]);
    const [isModalVisible, SetModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
    });

    useEffect(() => {

        api.get('social-networks').then(response => {
            setNetwoorks(response.data);
        });
        const object = JSON.parse(JSON.stringify(localStorage.getItem('post')));
        if (object && object.length > 0) {
            const post = JSON.parse(object);
            setFormData({ ...formData, 'date': post.date, 'time': post.time });
            setselectedNetwork(post.networks);
            setFileURL(post.img);
            setselectedDescription(post.description);
            localStorage.removeItem('post');
        }
    }, []);

    function verifyExistFileAndNetwork() {
        return fileURL && selectedNetwork.length > 0 && (formData.time !== "") ? true : false;
    }
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
        console.log(selectedNetwork);
    }
    function handleCloseModal() {
        SetModalVisible(false);
        history.push('/schedules');
    }
    function handlePreviewPost() {
        localStorage.setItem("post", JSON.stringify(
            {
                img: fileURL,
                description: selectedDescription,
                networks: selectedNetwork,
                date: formData.date,
                time: formData.time,
            }));
        history.push('/preview_mobile');
    }
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const { date, time } = formData;
        const networks = selectedNetwork;
        const formatDate = new Date(date.concat(", ").concat(time));

        const data = {
            "publication_date": formatDate.toISOString(),
            "text": selectedDescription,
            "status_key": 1,
            "social_network_key": networks,
            "media": "https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        };
        await api.post('schedules', data);
        SetModalVisible(true);
    }

    return (
        <>
            <Form>
                <section className="FormPost">
                    <Network>
                        <CardHeader>
                            <div className="title"><span>Redes Sociais</span></div>
                        </CardHeader>
                        <div className="CardContainer">
                            <ul>
                                {
                                    networks && (networks.length > 0) &&
                                    networks.map((item, index) => (
                                        <li
                                            key={index}
                                            className={selectedNetwork.includes(item.id) ? 'selected' : ''}
                                        >
                                            <Link
                                                onClick={() => handleSelectNetwork(item.id)}
                                                className={(item.status === "disabled") ? 'isDisabled' : ''}
                                                to="#">
                                                <FontAwesomeIcon className="icon" color="black" icon={findIconDefinition({ prefix: 'fab', iconName: item.icon } as IconLookup)} />
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Network>
                    <Calendar>
                        <CardHeader>
                            <div className="title"><span>Data da Publicação</span></div>
                        </CardHeader>
                        <div className="CardContainer">
                            <input onChange={hadleInputChange} value={formData.date} name="date" type="date" className="date" />
                            <input onChange={hadleInputChange} value={formData.time} name="time" type="time" className="time" />
                        </div>
                    </Calendar>
                    <DescriptionPost>
                        <CardHeader>
                            <div className="title"><span>Texto do post</span></div>
                            <textarea onChange={hadleTextareaChange} name="description" value={selectedDescription} placeholder="Aqui vai o texto descritivo do post"></textarea>
                        </CardHeader>
                    </DescriptionPost>
                    <File>
                        <CardHeader>
                            <div className="title"><span>Upload de imagem</span></div>
                            <Dropzone onFileUploaded={setSelectedFile} onFileURL={setFileURL} />
                        </CardHeader>
                    </File>
                    <ViewPostMobile>
                        <button
                            onClick={handlePreviewPost}
                            className={!verifyExistFileAndNetwork() ? "isDisabled" : ''}
                        >
                            Visualizar post
                        </button>
                    </ViewPostMobile>
                </section>
                <section className="PreviewPost">
                    <ViewPost>
                        <CardHeader>
                            <div className="title"><span>Visualização do post</span></div>
                        </CardHeader>
                        {verifyExistFileAndNetwork() ? (
                            <Preview
                                img={fileURL}
                                date={formData.date}
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
                        <div className="cancel"><Link to="/">Cancelar</Link></div>
                        <div className="save">
                            <Link to="/">
                                <span className="mobile">Rascunho</span>
                                <span className="desktop">Salvar rascunho</span>
                            </Link>
                        </div>
                        <div className="schedule">
                            <Link
                                onClick={handleSubmit}
                                to="/"
                                className={!verifyExistFileAndNetwork() ? "isDisabled" : ''}
                            >Agendar </Link></div>
                    </ContainerFooter>
                </section>
            </Form>
            <ModalComponent isOpen={isModalVisible} clickClose={() => handleCloseModal()} />
        </>
    );
};

export default Post;