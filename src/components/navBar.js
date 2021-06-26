import React from "react"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Grid,
  GridItem,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons"
import { StaticImage } from "gatsby-plugin-image"

import { UserAuthProvider, UserAuthConsumer } from "../contexts/userAuthContext"

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <UserAuthProvider>
      <UserAuthConsumer>
        {({ userId, logout, loading }) => (
          <Box>
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
              <GridItem colSpan={{ base: 12 }} bg="white">
                {loading ? (
                  <Flex
                    bg={"gray.50"}
                    color={"gray.600"}
                    minH={"60px"}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={"solid"}
                    borderColor={"gray.200"}
                    align={"center"}
                  ></Flex>
                ) : (
                  <Flex
                    bg={"gray.50"}
                    color={"gray.600"}
                    minH={"60px"}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={"solid"}
                    borderColor={"gray.200"}
                    align={"center"}
                  >
                    <Flex
                      flex={{ base: 1, md: "auto" }}
                      ml={{ base: -2 }}
                      display={{ base: "flex", md: "none" }}
                    >
                      <IconButton
                        onClick={onToggle}
                        icon={
                          isOpen ? (
                            <CloseIcon w={3} h={3} />
                          ) : (
                            <HamburgerIcon w={5} h={5} />
                          )
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                      />
                    </Flex>
                    <Flex
                      flex={{ base: 1 }}
                      justify={{ base: "center", md: "start" }}
                    >
                      <Link href="/">
                        <StaticImage
                          src="../images/logo3.png"
                          alt="Quilter Sara logo"
                          placeholder="blurred"
                          height={50}
                          mb={10}
                        />
                      </Link>

                      <Flex display={{ base: "none", md: "flex" }} ml={10}>
                        <DesktopNav />
                      </Flex>
                    </Flex>
                    {userId ? (
                      <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={"flex-end"}
                        direction={"row"}
                        spacing={6}
                      >
                        <Button
                          // display={{ base: "none", md: "inline-flex" }}
                          fontSize={"sm"}
                          fontWeight={600}
                          color={"white"}
                          onClick={logout}
                          bg={"purple.600"}
                          _hover={{
                            bg: "purple.700",
                          }}
                        >
                          Log out
                        </Button>
                      </Stack>
                    ) : (
                      <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={"flex-end"}
                        direction={"row"}
                        spacing={6}
                      >
                        <Link
                          href="/login"
                          _hover={{
                            textDecoration: "none",
                          }}
                        >
                          <Button
                            // display={{ base: "none", md: "inline-flex" }}
                            fontWeight={600}
                            // color={"white"}
                            // bg={"purple.600"}
                            // _hover={{
                            //   bg: "purple.700",
                            // }}
                          >
                            Sign In
                          </Button>
                        </Link>
                        <Link
                          href="/register"
                          _hover={{
                            textDecoration: "none",
                          }}
                        >
                          <Button
                            // display={{ base: "none", md: "inline-flex" }}
                            // fontSize={{ base: "xs", md: "sm" }}
                            fontWeight={600}
                            color={"white"}
                            bg={"purple.600"}
                            _hover={{
                              bg: "purple.700",
                            }}
                          >
                            Sign Up
                          </Button>
                        </Link>
                      </Stack>
                    )}
                  </Flex>
                )}

                <Collapse in={isOpen} animateOpacity>
                  <MobileNav />
                </Collapse>
              </GridItem>
            </Grid>
          </Box>
        )}
      </UserAuthConsumer>
    </UserAuthProvider>
  )
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                top={3}
                position="relative"
                // color={useColorModeValue("gray.600", "gray.200")}
                _hover={{
                  textDecoration: "none",
                  // color: useColorModeValue("gray.800", "white"),
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                // bg={useColorModeValue("white", "gray.800")}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = NAV_ITEMS => {
  return (
    <Link
      href={NAV_ITEMS.href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {NAV_ITEMS.label}
          </Text>
          <Text fontSize={"sm"}>{NAV_ITEMS.subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = NAV_ITEMS => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={NAV_ITEMS.children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={NAV_ITEMS.href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {NAV_ITEMS.label}
        </Text>
        {NAV_ITEMS.children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {NAV_ITEMS.children &&
            NAV_ITEMS.children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const NAV_ITEMS = [
  {
    label: "About",
    children: [
      {
        label: "About Sara",
        subLabel: "Who is she?",
        href: "/about",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Whats new",
        href: "#",
      },
    ],
  },
  {
    label: "The Long Arm",
    children: [
      {
        label: "Link One",
        subLabel: "About the long arm",
        href: "#",
      },
      {
        label: "Custom quilts",
        subLabel: "Description for custom quilts",
        href: "#",
      },
      {
        label: "Threads",
        subLabel: "All the threads",
        href: "#",
      },
    ],
  },
  {
    label: "Patterns",
    children: [
      {
        label: "All patterns",
        subLabel: "View every pattern on file",
        href: "/patterns",
      },
      {
        label: "Your favorited patterns",
        subLabel: "View your favorited patterns",
        href: "/favs",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
]
