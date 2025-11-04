import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Buscar releases do GitHub
    const releaseResponse = await fetch(
      'https://api.github.com/repos/luizaugustom/montshop-desktop/releases/latest',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 300 }
      }
    )

    if (!releaseResponse.ok) {
      throw new Error(`GitHub API error: ${releaseResponse.status}`)
    }

    const release = await releaseResponse.json()

    // Procurar o arquivo .exe nos assets
    const setupFile = release.assets?.find((asset: any) => 
      asset.name.includes('MontShop-Desktop-Setup') && asset.name.endsWith('.exe')
    )

    if (!setupFile) {
      return NextResponse.json(
        { error: 'Arquivo de instalação não encontrado' },
        { status: 404 }
      )
    }

    // Buscar o arquivo binário do GitHub
    const fileResponse = await fetch(setupFile.browser_download_url)

    if (!fileResponse.ok) {
      throw new Error(`Erro ao baixar arquivo: ${fileResponse.status}`)
    }

    // Converter para buffer
    const fileBuffer = await fileResponse.arrayBuffer()

    // Retornar o arquivo com headers apropriados para forçar download
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/x-msdownload',
        'Content-Disposition': `attachment; filename="${setupFile.name}"`,
        'Content-Length': setupFile.size.toString(),
        'Cache-Control': 'public, max-age=3600', // Cache de 1 hora
      },
    })
  } catch (error) {
    console.error('Erro ao fazer download do arquivo:', error)
    return NextResponse.json(
      { error: 'Erro ao fazer download do arquivo' },
      { status: 500 }
    )
  }
}

