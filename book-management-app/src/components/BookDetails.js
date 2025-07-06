// components/BookDetails.js
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

// Helper HOC to inject params as props
function withParams(Component) {
  return function Wrapper(props) {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
}

class BookDetails extends Component {
  render() {
    const { id } = this.props.params;
    return (
      <div style={{ border: '1px solid #7a7aff', padding: '20px', marginTop: '20px', background: '#fafcff', borderRadius: 6, width: 350, marginLeft: 'auto', marginRight: 'auto' }}>
        <h4 style={{ color: '#222', margin: 0, fontWeight: 'normal' }}>Edit the Book with id = <span style={{ color: '#222', fontWeight: 'bold' }}>{id}</span></h4>
      </div>
    );
  }
}

export default withParams(BookDetails);
