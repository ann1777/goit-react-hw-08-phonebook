import React from 'react';
import { SectionTitle } from './Title.styled';
import PropTypes from 'prop-types';

export function Title ({ title }) {
    return (
        <SectionTitle>{title}</SectionTitle>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};