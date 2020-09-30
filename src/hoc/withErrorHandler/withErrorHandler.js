import React from 'react';

import Modal from '../../components/UI/Modal/Modal';

import useAxiosErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, clearError] = useAxiosErrorHandler(axios)
    return (
      <>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message: null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
    
  }
}

export default withErrorHandler;