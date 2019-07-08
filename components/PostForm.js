import React from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post);
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/from-data">
      <Input.TextArea maxLength={140} placeholder="이게 최선이야?" />
      <div>
        <Input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          뀍뀍
        </Button>
      </div>
      <div>
        {imagePaths.map(v => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={`https://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
