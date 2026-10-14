import { NextRequest, NextResponse } from "next/server";

// MCP JSON-RPC 2.0 server for Arakaki Odonto
// Enables AI agents to discover and use clinic tools

const tools = [
  {
    name: "getClinicInfo",
    description:
      "Returns complete information about Arakaki Odonto dental clinic, including name, specialty, location, dentist credentials, and contact.",
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  {
    name: "listServices",
    description:
      "Lists all dental services available at Arakaki Odonto with descriptions, procedures, and indications.",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          enum: ["implantes", "hof", "clareamento", "all"],
          description: "Filter services by category. Default is 'all'.",
        },
      },
      required: [],
    },
  },
  {
    name: "getDentistProfile",
    description:
      "Returns the professional profile of Dra. Jéssica Arakaki including CRO registration, specialties, and credentials.",
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  {
    name: "scheduleConsultation",
    description:
      "Returns the WhatsApp scheduling link for booking a consultation at Arakaki Odonto. Optionally accepts a service type to pre-fill the message.",
    inputSchema: {
      type: "object",
      properties: {
        service: {
          type: "string",
          enum: ["implantes", "hof", "clareamento", "geral"],
          description: "Service of interest for pre-filled WhatsApp message.",
        },
      },
      required: [],
    },
  },
];

const clinicInfo = {
  name: "Arakaki Odonto",
  type: "Dental Clinic",
  specialties: ["Implantes Dentários", "Harmonização Orofacial", "Clareamento Dental"],
  location: {
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
  },
  contact: {
    whatsapp: "+55 11 99999-9999",
    instagram: "@arakakiodonto",
    website: "https://arakakiodonto.com.br",
  },
  dentist: {
    name: "Dra. Jéssica Arakaki",
    cro: "59293",
    council: "CRO-SP",
    specialties: ["Implantodontia", "Harmonização Orofacial"],
  },
  hours: "Segunda a Sábado, 08h às 18h",
  languages: ["Português"],
};

const services = {
  implantes: {
    id: "implantes",
    name: "Implantes Dentários",
    category: "Reabilitação Oral",
    description:
      "Reabilitação oral com implantes de titânio osseointegráveis. Substitui dentes perdidos com solução permanente e natural.",
    procedures: [
      { name: "Implante Unitário", description: "Substitui um único dente com coroa de cerâmica" },
      { name: "All-on-4", description: "Arcada completa com 4 implantes" },
      { name: "All-on-6", description: "Arcada completa com 6 implantes" },
    ],
    technology: ["Tomografia Cone Beam", "Planejamento Digital", "Guia Cirúrgico"],
    pageUrl: "https://arakakiodonto.com.br/implantes",
  },
  hof: {
    id: "hof",
    name: "Harmonização Orofacial",
    category: "Estética Facial",
    description:
      "Procedimentos estéticos minimamente invasivos que harmonizam rosto e sorriso. Toxina botulínica, preenchimentos e bioestimuladores.",
    procedures: [
      { name: "Toxina Botulínica", description: "Suavização de linhas e tratamento de bruxismo" },
      { name: "Ácido Hialurônico", description: "Preenchimento labial e facial" },
      { name: "Bioestimuladores de Colágeno", description: "Firmeza e rejuvenescimento progressivo" },
      { name: "Fios de PDO", description: "Lifting não cirúrgico" },
      { name: "Skinbooster", description: "Hidratação profunda da pele" },
      { name: "Rinomodelação", description: "Correção do contorno nasal sem cirurgia" },
    ],
    pageUrl: "https://arakakiodonto.com.br/hof",
  },
  clareamento: {
    id: "clareamento",
    name: "Clareamento Dental",
    category: "Estética Dental",
    description:
      "Clareamento profissional com tecnologia LED. Resultados seguros, duráveis e personalizados.",
    procedures: [
      { name: "Clareamento LED", description: "Sessão em consultório com luz de ativação" },
      { name: "Clareamento Caseiro Supervisionado", description: "Moldeiras personalizadas para uso em casa" },
    ],
    pageUrl: "https://arakakiodonto.com.br/contato",
  },
};

function handleToolCall(name: string, args: Record<string, string>) {
  switch (name) {
    case "getClinicInfo":
      return { content: [{ type: "text", text: JSON.stringify(clinicInfo, null, 2) }] };

    case "listServices": {
      const cat = args.category || "all";
      const result = cat === "all" ? services : { [cat]: services[cat as keyof typeof services] };
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
    }

    case "getDentistProfile":
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                name: "Jéssica Arakaki",
                honorific: "Dra.",
                registration: "CRO 59293",
                council: "CRO-SP",
                profession: "Cirurgiã-Dentista",
                specialties: ["Implantodontia", "Harmonização Orofacial"],
                clinic: "Arakaki Odonto",
                location: "São Paulo, SP, Brasil",
                languages: ["Português"],
                profileUrl: "https://arakakiodonto.com.br/sobre",
              },
              null,
              2
            ),
          },
        ],
      };

    case "scheduleConsultation": {
      const service = args.service || "geral";
      const messages: Record<string, string> = {
        implantes: "Olá! Tenho interesse em implantes dentários.",
        hof: "Olá! Tenho interesse em Harmonização Orofacial.",
        clareamento: "Olá! Tenho interesse em clareamento dental.",
        geral: "Olá! Gostaria de agendar uma avaliação.",
      };
      const msg = encodeURIComponent(messages[service] || messages.geral);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              whatsappUrl: `https://wa.me/5511999999999?text=${msg}`,
              instructions: "Direct the user to click this link to open WhatsApp and schedule a consultation.",
              hours: "Segunda a Sábado, 08h às 18h",
              responseTime: "Até 2 horas",
            }),
          },
        ],
      };
    }

    default:
      return {
        content: [{ type: "text", text: "Unknown tool" }],
        isError: true,
      };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { jsonrpc, method, params, id } = body;

    if (jsonrpc !== "2.0") {
      return NextResponse.json({ error: "Invalid JSON-RPC version" }, { status: 400 });
    }

    if (method === "initialize") {
      return NextResponse.json({
        jsonrpc: "2.0",
        id,
        result: {
          protocolVersion: "2024-11-05",
          capabilities: { tools: {} },
          serverInfo: {
            name: "arakakiodonto-mcp",
            version: "1.0.0",
            description: "Arakaki Odonto dental clinic MCP server",
          },
        },
      });
    }

    if (method === "tools/list") {
      return NextResponse.json({
        jsonrpc: "2.0",
        id,
        result: { tools },
      });
    }

    if (method === "tools/call") {
      const { name, arguments: args } = params;
      const result = handleToolCall(name, args || {});
      return NextResponse.json({ jsonrpc: "2.0", id, result });
    }

    return NextResponse.json({
      jsonrpc: "2.0",
      id,
      error: { code: -32601, message: "Method not found" },
    });
  } catch {
    return NextResponse.json(
      { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    name: "Arakaki Odonto MCP Server",
    version: "1.0.0",
    protocol: "MCP/2024-11-05",
    endpoint: "/api/mcp",
    tools: tools.map((t) => ({ name: t.name, description: t.description })),
  });
}
