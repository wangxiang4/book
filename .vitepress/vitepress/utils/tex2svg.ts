import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor'
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html'
import { mathjax } from 'mathjax-full/js/mathjax'
import juice from "juice/client"
import { TeX } from 'mathjax-full/js/input/tex'
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages'
import { SVG } from 'mathjax-full/js/output/svg'
import globalConfig from '../../config/mathjax'

import type { OptionList } from 'mathjax-full/ts/util/Options'
interface DocumentOptions {
  InputJax: TeX<unknown, unknown, unknown>
  OutputJax: SVG<unknown, unknown, unknown>
}
interface ConvertOptions {
  display: boolean
}

export function renderTeX (content: string, options?: OptionList) {

  const config = Object.assign({}, options)

  // Default options
  const documentOptions: DocumentOptions = {
    InputJax: new TeX({ packages: AllPackages,  ...globalConfig.tex, ...(config.tex ?? {}) }),
    OutputJax: new SVG({ fontCache: 'none',  ...globalConfig.svg, ...(config.svg ?? {}) })
  }
  const convertOptions: ConvertOptions = {
    display: false,
    ...globalConfig.convert,
    ...(config.convert ?? {})
  }

  const adaptor = liteAdaptor()
  RegisterHTMLHandler(adaptor)
  const mathDocument = mathjax.document(content, documentOptions)
  let html = adaptor.outerHTML(mathDocument.convert(content, convertOptions))
  const stylesheet = adaptor.outerHTML(documentOptions.OutputJax.styleSheet(mathDocument) as any)
  return juice(html+stylesheet)
}
