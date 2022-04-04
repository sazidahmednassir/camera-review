import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="container mt-3">
      <div class="card border-0 mb-3">
        
          <div class=" card-body ">
            <div class="card-body text-dark ">
              <h5 class="card-title text-danger  text-center">What is Context API ?</h5>
              <p class="card-text">
              The React Context API allows a React project to generate global variables that may be passed around. This is an alternative to "prop drilling," which involves passing props from grandparent to child to parent. The Context API can be used to exchange data with different components without the need to feed data through props manually. The Context API is a React feature that allows developers to bind variables to DOM elements. Keeping track of the current context within a node is simplified, which is helpful for activities like async programming or data retrieval.
              </p>
            </div>
          </div>
          
        </div>
        <div class="card border-0 mb-3">
        
          <div class=" card-body">
            <div class="card-body text-dark ">
              <h5 class="card-title text-danger text-center">Difference between Inline block and Inline block elements?</h5>
              <p class="card-text">
              An inline block is a piece of text that is inserted inline into a document, as opposed to being placed in a separate paragraph. An inline block can contain any amount of text, and its formatting (including the use of fonts and colors) is controlled by the surrounding text.

             An inline block element, on the other hand, is a special type of inline block that's used to group elements together. Inline block elements typically have a defined width and are formatted like normal paragraphs.
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
    );
};

export default Blog;