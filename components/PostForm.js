import React from "react";
import { Form, Input, Button } from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "넛지"
      },
      content: "이새기 뭐라는지 하나도 모르겠네",
      img:
        "https://mblogthumb-phinf.pstatic.net/MjAxNzA3MDNfMTkg/MDAxNDk5MDU5MDAyNzUw.Sfl9pMVF4t05vyKTIaZNopbUlEhYJSqWu_QlmihW-Lsg.HAS5NsYee9lAZDbrbZvaIm0iz70gCqZliVyGa6TnHfUg.JPEG.dlgydnjs2004/16790130_1762078090786540_944302028073467904_n.jpg?type=w800"
    }
  ]
};

const PostForm = () => {
  return (
    <Form style={{ margin: "10px 0 20px" }} encType="multipart/from-data">
      <Input.TextArea maxLength={140} placeholder="이게 최선이야?" />
      <div>
        <Input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          뀍뀍
        </Button>
      </div>
      <div>
        {dummy.imagePaths.map((v, i) => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img src={"https://localhost:3065/" + v} style={{ width: "200px" }} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
