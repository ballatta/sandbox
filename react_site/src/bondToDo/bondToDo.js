import React, { useState } from "react";
import AWS from "aws-sdk";

const ACCESS_KEY = "AKIAVQKFNNJWBJY2KYVJ";
const SECRET_KEY = "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";

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
});

export default function bondToDo(props) {
  const [bucketData, setBucketData] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const deleteItem = (item) => {
    const sameItem = (currentItem) => {
      if (currentItem.task === item.task) {
        return true;
      }
    };
    let itemIndex = bucketData.findIndex(sameItem);
    let newBucketData = bucketData.slice();
    newBucketData.splice(itemIndex, 1);
    setBucketData(newBucketData);
  };

  const getObject = async () => {
    var params = { Bucket: "bondtodo1", Key: "toDo.json" };
    var s3file = await s3.getObject(params).promise();
    setBucketData(JSON.parse(s3file.Body.toString("utf-8")));
  };

  const addTask = () => {
    const newBucketData = [
      ...bucketData,
      {
        task: taskInput,
        priority: "LOW",
      },
    ];
    setBucketData(newBucketData);
  };

  const saveObject = () => {
    const fileData = Buffer.from(JSON.stringify(bucketData));

    const params = {
      Bucket: "bondtodo1",
      Key: "toDo.json",
      Body: fileData,
      ContentType: "application/json",
    };

    s3.upload(params, function (error, data) {
      if (error) {
        throw error;
      }
      console.log(`File was Uploaded Successfully. ${data.Location}`);
    });
  };

  return (
    <>
      <div>
        {bucketData.map((item) => (
          <button
            onClick={() => deleteItem(item)}
          >{`${item.task}, ${item.priority}`}</button>
        ))}
      </div>
      <button onClick={getObject}>get object</button>
      <button onClick={addTask}>add task</button>
      <button onClick={saveObject}>save object</button>
      <input
        value={taskInput}
        onChange={(e) => {
          setTaskInput(e.target.value);
        }}
      />
    </>
  );
}

/**
 * ToDos
 *
 * Priority
 * Render it all out
 * Save Button
 * Groups (Priority and/or categories)
 * Due Date (with countdown)
 * Backups
 * Migrate to React Native
 * Site with user/password (S3)
 */
