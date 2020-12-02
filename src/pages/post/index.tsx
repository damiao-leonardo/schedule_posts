import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import {
    Form, Network, Calendar, DescriptionPost,
    File, ViewPost, ViewPostMobile, CardHeader, ContainerFooter
} from './style';
import { Link,useHistory } from 'react-router-dom';
import Previewpost from '../../assets/preview_post.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropzone from '../../components/upload';
import Preview from '../../components/preview';

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
    const [formData, setFormData] = useState({
        date: '',
        time: '',
    });

    useEffect(() => {
        api.get('social-networks').then(response => {
            setNetwoorks(response.data);
        });

    }, []);

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

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const { date, time } = formData;
        const networks = selectedNetwork;
        const data = {
              "publication_date": "2020-09-08T15:59:23.922Z",
              "text": selectedDescription,
              "status_key": "1",
              "social_network_key": networks,
              "media": "https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          
          };
        await api.post('schedules', data);
        history.push('/schedules');
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
                            {networks.map((item) => (
                                <li
                                    key={item.id}
                                    className={selectedNetwork.includes(item.id) ? 'selected' : ''}
                                >
                                    <Link 
                                       onClick={() => handleSelectNetwork(item.id)}
                                       className={(item.status === "disabled") ? 'isDisabled' : '' }  
                                       to="#">
                                       <FontAwesomeIcon className="icon" color="red" icon={["fab", "facebook-f"]} />
                                    </Link>
                                </li>
                            ))}
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