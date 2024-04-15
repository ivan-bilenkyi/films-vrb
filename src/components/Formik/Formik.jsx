import React, {useRef, useState} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
    DescriptionInput,
    ErrorMessageStyled,
    FormGroup,
    Input,
    Label,
    StyledButton,
    StyledForm
} from "./Formik.styled.jsx";
import {UploadImage} from "../UploadImage/UploadImage.js";



export const FilmForm = ({ onSendForm, item, onClose }) => {
    const [imageUrl, setImageUrl] = useState(item.image);
    const imageInputRef = useRef(null);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string(),
        rating: Yup.number()
            .min(0, 'Rating must be between 0 and 10')
            .max(10, 'Rating must be between 0 and 10')
            .required('Rating is required'),
        release_date: Yup.date().required('Release Date is required'),
        genre: Yup.string().required('Genre is required'),
        actors: Yup.string().required('Actors is required'),
        director: Yup.string().required('Director is required'),
        image: Yup.mixed(),
    });

    const initialValues = {
        title: item.title || '',
        description: item.description || '',
        rating: item.rating || '',
        release_date: item.release_date || '',
        genre: item.genre ? item.genre.join(', ') : '',
        actors: item.actors ? item.actors.join(', ') : '',
        director: item.director || '',
        image: ''
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageUrl(URL.createObjectURL(file));
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                const genreArray = values.genre.split(',').map(genre => genre.trim());
                const actorsArray = values.actors.split(',').map(actor => actor.trim());
                let newUrlImg = imageUrl;
                if (imageUrl !== item.image) {
                    const file = imageInputRef.current.files[0];
                    newUrlImg = await UploadImage(file);
                }
                onClose();
                onSendForm(item.id, { ...values, genre: genreArray, actors: actorsArray, image: newUrlImg });
            }}
        >
            {() => (
                <StyledForm>
                    <FormGroup>
                        <Label htmlFor="title">Title:</Label>
                        <Input type="text" id="title" name="title" />
                        <ErrorMessageStyled name="title" component="div" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="rating">Rating:</Label>
                        <Input type="text" id="rating" name="rating" />
                        <ErrorMessageStyled name="rating" component="div" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="description">Description:</Label>
                        <DescriptionInput as="textarea" id="description" name="description" defaultValue={initialValues.description} />
                        <ErrorMessageStyled name="description" component="div" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="release_date">Release Date:</Label>
                        <Input type="date" id="release_date" name="release_date" />
                        <ErrorMessageStyled name="release_date" component="div" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="genre">Genre:</Label>
                        <Input type="text" id="genre" name="genre" />
                        <ErrorMessageStyled name="genre" component="div" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="actors">Actors:</Label>
                        <Input type="text" id="actors" name="actors" />
                        <ErrorMessageStyled name="actors" component="div" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="director">Director:</Label>
                        <Input type="text" id="director" name="director" />
                        <ErrorMessageStyled name="director" component="div" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="image">Image:</Label>
                        <input ref={imageInputRef} type="file" name="image" id="image" accept="image/*"
                               onChange={handleFileChange}/>
                        <ErrorMessageStyled name="image" component="div"/>
                    </FormGroup>

                    <StyledButton type="submit">Save</StyledButton>
                </StyledForm>
            )}
        </Formik>
    );
};

