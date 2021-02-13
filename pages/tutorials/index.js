import React from "react";

import Bugbar from "../../components/bugbar";

export default function index() {
  return (
    <div className="container">
      <Layout>
        <main className="content">
          <Bugbar />
          <section className="section">
            <span className="first-letter">
              <p>Future Home of the Tutorials</p>
            </span>
          </section>
        </main>
      </Layout>
    </div>
  );
}
