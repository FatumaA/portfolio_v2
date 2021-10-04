import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="text-purple-500 text-center font-bold  mx-24 top-0 sticky pt-4 pb-4">
            <h3>Delicately crafted by: <span>
                <Link href="https://twitter.com/XquisiteDreamer">
                    <a target='_blank' rel='noreferrer'>Fatuma A - HijabiCoder</a>
                </Link>
                </span>
            </h3>
            <h2>Using <span>
                <Link href="https://nextjs.org/">
                    <a target='_blank' rel='noreferrer'>NextJs</a>
                </Link></span>
            </h2>
            <h2>Hosted on <span>
                <Link href="https://www.netlify.com/">
                    <a target='_blank' rel='noreferrer'>Netlify</a>
                </Link>
                </span>
            </h2>

        </div>
    )
}

export default Footer
