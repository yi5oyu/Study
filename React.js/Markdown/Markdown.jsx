import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";
import { ChakraProvider, extendTheme, Textarea, Box, Flex } from "@chakra-ui/react";

// 마크다운 스타일 커스텀
const customTheme = extendTheme({
  components: {
    Markdown: {
      baseStyle: {
        ul: {
          paddingLeft: 4,
          listStyleType: "disc",
        },
        li: {
          marginBottom: 2,
        },
        h1: {
          fontSize: "2xl",
          fontWeight: "bold",
        },
        p: {
          fontSize: "md",
          marginBottom: 4,
        },
      },
    },
  },
});

const Markdown = () => {
  // 마크다운 텍스트 
  const [markdownText, setMarkdownText] = useState("");

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  // 탭 누르면 들여쓰기(4칸)
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();

      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;

      const indent = "    ";
      const newValue =
        markdownText.substring(0, start) + indent + markdownText.substring(end);

      setMarkdownText(newValue);
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + indent.length;
      }, 0);
    }
  };

  return (
    <ChakraProvider theme={customTheme}>
      <Box p={5}>
        <Flex gap={5} flexWrap="wrap">
          {/* 마크다운 입력 */}
          <Textarea
            value={markdownText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Write Markdown here"
            resize="none"
            h="300px"
            w={["100%", "45%"]}
            fontSize="md"
            p={4}
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
          />

          {/* 마크다운 화면 */}
          <Box
            w={["100%", "45%"]}
            h="300px"
            overflowY="auto"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            p={4}
          >
            <ReactMarkdown
              components={ChakraUIRenderer()}
              remarkPlugins={[remarkGfm]}
            >
              {markdownText}
            </ReactMarkdown>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Markdown;
