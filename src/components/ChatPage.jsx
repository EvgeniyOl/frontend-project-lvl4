import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Channels from './Channels.jsx';
import Comments from './Comments.jsx';
import { useDispatch } from 'react-redux';
import fetchData from '../thunks/dataFetchThunk.js';


const ChatPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white">
        <Channels />
        <Comments />
      </Row>
    </Container>
  );
};
export default ChatPage;