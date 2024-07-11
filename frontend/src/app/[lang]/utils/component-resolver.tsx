import { ReactElement, lazy, createElement, Suspense } from 'react';
import Loader from '../components/Loader';

export default function componentResolver(section: any, index: number) : ReactElement {

    // Component names do look like 'category.component-name' => lowercase and kebap case
    const names: string[] = section.__component.split('.')

    // Get category name
    const category = names[0]

    // Get component name
    const component = names[1]

    ///////////////////////////////////////////////
    // Convert the kebap-case name to PascalCase
    const parts: string[] = component.split('-')

    let componentName = ''

    parts.forEach( s => {
        componentName += capitalizeFirstLetter(s)
    })
    ///////////////////////////////////////////////

    //console.log(`ComponentResolver: Category => ${category} | Component => ${componentName} | Path => ../components/${componentName}`)

    // The path for dynamic imports cannot be fully dynamic.
    // Webpack requires a static part of the import path at the beginning. 
    // All modules below this path will be included in the bundle and be available for dynamic loading
    // Besides, this will result in code splitting and better performance.
    // See https://webpack.js.org/api/module-methods/#import-1
    
    // Use react lazy loading to import the module. By convention: The file name needs to match the name of the component (what is a good idea)
    let module = lazy(() => import( `../components/${componentName}`))

    // Create react element. The 'type' argument needs to be a FunctionComponent, not a string
    const reactElement = createElement(module, {data: section, key: index})

    return (
        <Suspense fallback={<Loader />} key={index}>
            {reactElement}
        </Suspense>
    )
}

function capitalizeFirstLetter(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}