import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import defaultImage from '../../assets/default.jpg';

const StyledForm = styled(Form)`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const FormGroup = styled.div`
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`;

const Input = styled(Field)`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
    flex: 1;

    &:focus {
        border-color: #6e93b5;
    }
`;

const DescriptionInput = styled(Input)`
    height: 200px; 
    resize: none; 
`;

const ErrorMessageStyled = styled(ErrorMessage)`
    color: red;
    margin-top: 5px;
`;

const StyledButton = styled.button`
    padding: 10px;
    background-color: #333333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    flex-grow: 1; 

    &:hover {
        color: red;
    }
`;

export const FilmForm = ({ onSubmit, item }) => {
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
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

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                const genreArray = values.genre.split(',').map(genre => genre.trim());
                const actorsArray = values.actors.split(',').map(actor => actor.trim());

                onSubmit({ ...values, genre: genreArray, actors: actorsArray, image: defaultImage }, { setSubmitting });
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
                        <Label htmlFor="description">Description:</Label>
                        <DescriptionInput as="textarea" id="description" name="description" defaultValue={initialValues.description} />
                        <ErrorMessageStyled name="description" component="div" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="rating">Rating:</Label>
                        <Input type="text" id="rating" name="rating" />
                        <ErrorMessageStyled name="rating" component="div" />
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
                        <Input type="file" id="image" name="image" accept="image/*" />
                        <ErrorMessageStyled name="image" component="div" />
                    </FormGroup>

                    <StyledButton type="submit">Save</StyledButton>
                </StyledForm>
            )}
        </Formik>
    );
};
