<?php

namespace Kunnu\Dropbox\Models;

class ModelFactory
{

    /**
     * Make a Model Factory
     *
     * @param  array $data Model Data
     *
     * @return \Kunnu\Dropbox\Models\ModelInterface
     */
    public static function make(array $data = array())
    {
        // dd( $data );
        if (static::isFileOrFolder($data)) {
            $tag = $data['.tag'];

            //File
            if (static::isFile($tag)) {
                return new FileMetadata($data);
            }

            //Folder
            if (static::isFolder($tag)) {
                return new FolderMetadata($data);
            }
        }

        //Temporary Link
        if (static::isTemporaryLink($data)) {
            return new TemporaryLink($data);
        }

        //List
        if (static::isList($data)) {
            return new MetadataCollection($data);
        }

        // Async Job
        if (isset($data['async_job_id'])) {
            return new AsyncJob($data);
        }

        //Search Results
        if (static::isSearchResult($data)) {
            return new SearchResults($data);
        }

        //Deleted File/Folder
        // if (static::isDeletedFileOrFolder($data)) {
        //     return new DeletedMetadata($data);
        // }

        //Base Model
        return new BaseModel($data);

        // if (isset($data['.tag'], $data['id'])) {
        //     $tag = $data['.tag'];

        //     //File
        //     if ('file' === $tag) {
        //         if (isset($data['url'])) {
        //             return new FileLinkMetadata($data);
        //         }

        //         return new FileMetadata($data);
        //     }

        //     //Folder
        //     if ('folder' === $tag) {
        //         if (isset($data['url'])) {
        //             return new FolderLinkMetadata($data);
        //         }

        //         return new FolderMetadata($data);
        //     }
        // }

        //Temporary Link
        // if (isset($data['metadata'], $data['link'])) {
        //     return new TemporaryLink($data);
        // }

        // //List
        // if (isset($data['entries'])) {
        //     return new MetadataCollection($data);
        // }

        // if (isset($data['entries'])) {
        //     return new MetadataCollection($data);
        // }

        // //List
        // if (isset($data['links'])) {
        //     return new MetadataCollection($data);
        // }

        // //Search Results
        // if (isset($data['matches'])) {
        //     return new SearchResults($data);
        // }

        // // Async Job
        // if (isset($data['async_job_id'])) {
        //     return new AsyncJob($data);
        // }

        // //Deleted File/Folder
        // //if (!isset($data['.tag']) || !isset($data['id'])) {
        // //    return new DeletedMetadata($data);
        // //}
        // //
        // //Simple BatchV2 Result response
        // if (isset($data['.tag']) && 'success' === $data['.tag']) {
        //     if (isset($data['success'])) {
        //         return self::make($data['success']);
        //     }
        //     if (isset($data['metadata'])) {
        //         return self::make($data['metadata']);
        //     }
        // }
        // //
        // //Simple Tag response
        // if (isset($data['.tag']) && 1 === count($data)) {
        //     return new Tag($data);
        // }

        // //Simple SearchV2 Result response
        // if (isset($data['.tag']) && 'metadata' === $data['.tag']) {
        //     if (isset($data['metadata'])) {
        //         return self::make($data['metadata']);
        //     }
        // }

        // //Base Model
        // return new BaseModel($data);
    }

    /**
     * @param array $data
     *
     * @return bool
     */
    protected static function isFileOrFolder(array $data)
    {
        return isset($data['.tag']) && isset($data['id']);
    }

    /**
     * @param string $tag
     *
     * @return bool
     */
    protected static function isFile($tag)
    {
        return $tag === 'file';
    }

    /**
     * @param string $tag
     *
     * @return bool
     */
    protected static function isFolder($tag)
    {
        return $tag === 'folder';
    }

    /**
     * @param array $data
     *
     * @return bool
     */
    protected static function isTemporaryLink(array $data)
    {
        return isset($data['metadata']) && isset($data['link']);
    }

    /**
     * @param array $data
     *
     * @return bool
     */
    protected static function isList(array $data)
    {
        return isset($data['entries']);
    }

    /**
     * @param array $data
     *
     * @return bool
     */
    protected static function isSearchResult(array $data)
    {
        return isset($data['matches']);
    }

    /**
     * @param array $data
     *
     * @return bool
     */
    protected static function isDeletedFileOrFolder(array $data)
    {
        return !isset($data['.tag']) || !isset($data['id']);
    }
}
