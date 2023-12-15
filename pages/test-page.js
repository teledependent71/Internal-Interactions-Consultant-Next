import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Internal Interactions Consultant</title>
          <meta
            property="og:title"
            content="test-page - Internal Interactions Consultant"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_vgqvif) => (
            <>
              <h1 id={context_vgqvif?.Name}>Heading</h1>
            </>
          )}
          initialData={props.contextVgqvifProp}
          persistDataDuringLoading={true}
          key={props?.contextVgqvifProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextVgqvifProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextVgqvifProp: contextVgqvifProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
