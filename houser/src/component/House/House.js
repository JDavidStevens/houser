import React, { Component } from 'react';

export default function House(props) {
  return (
    <div>
      House
      <p>{props.locations}</p>
      <button>Delete</button>
    </div>
  );
}
