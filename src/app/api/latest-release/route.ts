import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Buscar releases do GitHub
    const response = await fetch(
      'https://api.github.com/repos/luizaugustom/montshop-desktop/releases/latest',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        // Cache por 5 minutos para evitar muitas requisições
        next: { revalidate: 300 }
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const release = await response.json()

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

    return NextResponse.json({
      downloadUrl: setupFile.browser_download_url,
      version: release.tag_name,
      versionName: release.name,
      publishedAt: release.published_at,
    })
  } catch (error) {
    console.error('Erro ao buscar release do GitHub:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar versão mais recente' },
      { status: 500 }
    )
  }
}

