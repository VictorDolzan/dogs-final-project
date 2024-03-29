import React, {useEffect, useState} from 'react';
import styles from './UserPhotoPost.module.css';
import Input from "../../../Forms/Input/Input.jsx";
import Button from "../../../Forms/Button/Button.jsx";
import useForm from "../../../../Hooks/useForm.jsx";
import Error from "../../../Helper/Error/Error.jsx";
import {useNavigate} from "react-router-dom";
import Head from "../../../Helper/Head/Head.jsx";
import {useDispatch, useSelector} from "react-redux";
import {photoPost} from "../../../../store/actions/photoPost.jsx";

const UserPhotoPost = () => {
    const nome = useForm();
    const peso = useForm('number');
    const idade = useForm('number');
    const [img, setImg] = useState({});
    const {data, error, loading} = useSelector(state => state.photoPost);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.token.data);

    useEffect(() => {
        if (data) navigate('/conta');
    }, [data, navigate]);

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', peso.value);
        formData.append('idade', idade.value);

        dispatch(photoPost({formData, token}));
        navigate('/conta');
    }

    function handleImgChange({target}) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        });
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <Head title="Poste sua foto"/>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...nome} />
                <Input label="Peso" type="number" name="peso" {...peso} />
                <Input label="Idade" type="number" name="idade" {...idade} />
                <label className={styles.labelFile}>
                    <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange}/>
                    Carregue o arquivo
                </label>
                {
                    loading
                        ? (
                            <Button disabled>Carregando...</Button>
                        )
                        : (
                            <Button>Enviar</Button>
                        )
                }
                <Error error={error}/>
            </form>
            <div>
                {img.preview && (
                    <div
                        className={styles.preview}
                        style={{backgroundImage: `url('${img.preview}')`}}
                    ></div>
                )}
            </div>
        </section>
    );
};

export default UserPhotoPost;