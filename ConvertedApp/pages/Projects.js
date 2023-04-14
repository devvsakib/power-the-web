import Layout from '@/components'
import GetProjects from '@/components/Projects/GetProjects'

function Projects() {
    return (
        <Layout>
            <div className="text-center text-uppercase m-8">
                <h1 className="text-2xl md:text-4xl font-semibold  text-white">  Contributors Projects </h1>
                <p className="text-sm md:text-base text-white"> Source code given in GitHub. Join Us</p>
            </div>
            <GetProjects />
        </Layout >
    )
}

export default Projects